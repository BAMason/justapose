'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`postures`).then(() => {
    return knex.schema.createTable(`postures`, (table) => {
      table.increments();
      table.string(`name`).notNullable().unique();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`postures`);
};
