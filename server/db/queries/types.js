/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createType = (newType) => {
  return knex(`types`).returning(`*`).insert(newType);
};

/* READ */
const readType = (id) => {
  return knex(`types`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updateType = (id, changes) => {
  return knex(`types`).where(`id`, id).update(changes);
};

/* DELETE */
const deleteType = (id) => {
  return knex(`types`).where(`id`, id).del();
};

/* LIST */
const listTypes = () => {
  return knex(`types`).select(`*`).orderBy(`created_at`, `asc`);
};

module.exports = {
  createType,
  readType,
  updateType,
  deleteType,
  listTypes,
};
