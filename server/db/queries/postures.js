/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createPosture = (newPosture) => {
  return knex(`postures`).returning(`*`).insert(newPosture);
};

/* READ */
const readPosture = (id) => {
  return knex(`postures`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updatePosture = (id, changes) => {
  return knex(`postures`).where(`id`, id).update(changes);
};

/* DELETE */
const deletePosture = (id) => {
  return knex(`postures`).where(`id`, id).del();
};

/* LIST */
const listPostures = () => {
  return knex(`postures`).select(`*`).orderBy(`created_at`, `asc`);
};

module.exports = {
  createPosture,
  readPosture,
  updatePosture,
  deletePosture,
  listPostures,
};
