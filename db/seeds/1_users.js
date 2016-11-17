'use strict';

exports.seed = (knex) => {
  return knex(`users`).del().then(() => {
    return knex(`users`)
    .insert([
      {
        display_name: `Matt`,
       google_id: `12345`,
       google_token: `12345`
      },
    ]);
  });
};
