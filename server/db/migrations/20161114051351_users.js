'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`users`).then(() => {
    return knex.schema.createTable(`users`, (table) => {
      table.increments();
      table.string(`username`).notNullable().unique();
      table.string(`email`).notNullable().unique();
      table.string(`fb_id`).notNullable();
      table.string(`fb_token`).notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`users`);
};
