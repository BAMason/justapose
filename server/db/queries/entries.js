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
  return knex(`entries`).select(`*`).orderBy(`created_at`, `asc`);
};

module.exports = {
  createEntry,
  readEntry,
  updateEntry,
  deleteEntry,
  listEntries,
};
