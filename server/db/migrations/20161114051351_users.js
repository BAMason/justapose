'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`users`).then(() => {
    return knex.schema.createTable(`users`, (table) => {
      table.increments();
      table.string(`display_name`).notNullable().unique();
      table.string(`google_id`).notNullable();
      table.string(`google_token`).notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`users`);
};
