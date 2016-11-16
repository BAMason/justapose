'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`series`).then(() => {
    return knex.schema.createTable(`series`, (table) => {
      table.increments();
      table.string(`name`).notNullable().unique();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`series`);
};
