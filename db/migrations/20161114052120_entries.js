'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists(`entries`).then(() => {
    return knex.schema.createTable(`entries`, (table) => {
      table.increments();
      table.integer(`user_id`).notNullable().references(`users.id`).onDelete(`Cascade`);
      table.integer(`type_id`).notNullable().references(`types.id`);
      table.boolean(`sun_a`).notNullable().defaultTo(false);
      table.boolean(`sun_b`).notNullable().defaultTo(false);
      table.boolean(`standing`).notNullable().defaultTo(false);
      table.boolean(`primary`).notNullable().defaultTo(false);
      table.boolean(`secondary`).notNullable().defaultTo(false);
      table.boolean(`backbends`).notNullable().defaultTo(false);
      table.boolean(`finishing`).notNullable().defaultTo(false);
      table.boolean(`closing`).notNullable().defaultTo(false);
      table.string(`photo`);
      table.integer(`posture_id`).notNullable().references(`postures.id`);
      table.text(`notes`);
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable(`entries`);
};
