'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`types`).then(() => {
    return knex.schema.createTable(`types`, (table) => {
      table.increments();
      table.string(`name`).notNullable().unique();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`types`);
};
