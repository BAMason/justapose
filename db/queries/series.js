/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createSeries = (newSeries) => {
  return knex(`series`).returning(`*`).insert(newSeries);
};

/* READ */
const readSeries = (id) => {
  return knex(`series`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updateSeries = (id, changes) => {
  return knex(`series`).where(`id`, id).update(changes);
};

/* DELETE */
const deleteSeries = (id) => {
  return knex(`series`).where(`id`, id).del();
};

/* LIST */
const listSeries = () => {
  return knex(`series`).select(`*`).orderBy(`created_at`, `asc`);
};

module.exports = {
  createSeries,
  readSeries,
  updateSeries,
  deleteSeries,
  listSeries,
};
