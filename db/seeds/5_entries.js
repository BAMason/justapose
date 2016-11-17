'use strict';

exports.seed = (knex) => {
  return knex(`entries`).del().then(() => {
    return knex(`entries`)
    .insert([
      {
       date: '11/16/2016',
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
     },
      {
       date: '11/17/2016',
       user_id: 1,
       type_id: 2,
       sun_a: `false`,
       sun_b: `true`,
       standing: `false`,
       primary: `false`,
       secondary: `false`,
       backbends: `false`,
       finishing: `false`,
       closing: `false`,
       photo: `http://www.fillmurray.com/300/300`,
       posture_id: 2,
       notes: `Another little something`,
     }
    ]);
  });
};
