/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createEntry = (newEntry) => {
  return knex(`entries`).returning(`*`).insert(newEntry);
};

/* READ */
const readEntry = (id) => {
  return knex(`entries`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updateEntry = (id, changes) => {
  return knex(`entries`).where(`id`, id).update(changes);
};

/* DELETE */
const deleteEntry = (id) => {
  return knex(`entries`).where(`id`, id).del();
};

/* LIST */
const listEntries = () => {
  return knex(`entries`)
  .innerJoin(`users`, `users.id`, `entries.user_id`)
  .innerJoin(`postures`, `postures.id`, `entries.posture_id`)
  .innerJoin(`types`, `types.id`, `entries.type_id`)
  .select([`entries.id`, `entries.user_id`, `types.name`, `sun_a`,
    `sun_b`, `standing`, `primary`, `secondary`, `backbends`, `finishing`,
    `closing`, `photo`, `postures.name`, `notes`, `entries.updated_at`])
  .orderBy(`entries.created_at`, `asc`);
};

module.exports = {
  createEntry,
  readEntry,
  updateEntry,
  deleteEntry,
  listEntries,
};
