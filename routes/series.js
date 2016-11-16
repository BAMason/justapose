'use strict';

const db = require(`../db/queries/series`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newSeries = req.body;
  db.createSeries(newSeries)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.readSeries(id)
  .first()
  .then((series) => res.json(series))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:id`, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateSeries(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.deleteSeries(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listSeries()
  .then((series) => res.json(series))
  .catch((err) => next(err));
});

module.exports = router;
