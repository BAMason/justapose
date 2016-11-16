'use strict';

const db = require(`../db/queries/entries`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newEntry = req.body;
  db.createEntry(newEntry)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.readEntry(id)
  .first()
  .then((entry) => res.json(entry))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:id`, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateEntry(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.deleteEntry(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listEntries()
  .then((entries) => res.json(entries))
  .catch((err) => next(err));
});

module.exports = router;
