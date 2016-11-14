/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = (knex) => {
  return knex(`types`).del().then(() => {
    return knex(`types`)
    .insert([
      { name: `New Moon` },
      { name: `Full Moon` },
      { name: `Rest` },
      { name: `Practice` },
    ]);
  });
};
