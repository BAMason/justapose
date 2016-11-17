'use strict';

exports.seed = (knex) => {
  return knex(`entries`).del().then(() => {
    return knex(`entries`)
    .insert([
      {
       user_id: 1,
       type_id: 3,
       sun_a: `true`,
       sun_b: `false`,
       standing: `false`,
       primary: `false`,
       secondary: `false`,
       backbends: `false`,
       finishing: `false`,
       closing: `false`,
       photo: `http://www.fillmurray.com/200/200`,
       posture_id: 7,
       notes: `I wrote something in notes`,
     }
    ]);
  });
};
