'use strict';

const db = require(`../db/queries/users`);
const express = require(`express`); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newUser = req.body;
  db.createUser(newUser)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.readUser(id)
  .first()
  .then((user) => res.json(user))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:id`, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateUser(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.deleteUser(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listUsers()
  .then((users) => res.json(users))
  .catch((err) => next(err));
});

module.exports = router;
