'use strict';

const db = require(`../db/queries/types`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newType = req.body;
  db.createType(newType)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.readType(id)
  .first()
  .then((posture) => res.json(posture))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:id`, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateType(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.deleteType(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listTypes()
  .then((postures) => res.json(postures))
  .catch((err) => next(err));
});

module.exports = router;
