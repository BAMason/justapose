/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createUser = (newUsers) => {
  return knex(`users`).returning(`*`).insert(newUsers);
};

/* READ */
const readUser = (id) => {
  return knex(`users`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updateUser = (id, changes) => {
  return knex(`users`).where(`id`, id).update(changes);
};

/* DELETE */
const deleteUser = (id) => {
  return knex(`users`).where(`id`, id).del();
};

/* LIST */
const listUsers = () => {
  return knex(`users`).select(`*`).orderBy(`created_at`, `asc`);
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  listUsers,
};
