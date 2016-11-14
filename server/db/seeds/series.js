/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = (knex) => {
  return knex(`series`).del().then(() => {
    return knex(`series`)
    .insert([
      { name: `Surya Namaskara A` },
      { name: `Surya Namaskara B` },
      { name: `Standing Postures` },
      { name: `Yoga Chikitsa` },
      { name: `Nadi-Shodhana` },
      { name: `Sthira Bhaga` },
      { name: `Finishing Sequence` },
      { name: `Closing Postures` },
    ]);
  });
};
