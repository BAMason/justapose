'use strict';

const db = require(`../db/queries/postures`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newPosture = req.body;
  db.createPosture(newPosture)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.readPosture(id)
  .first()
  .then((posture) => res.json(posture))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:id`, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updatePosture(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:id`, (req, res, next) => {
  const id = req.params.id;
  db.deletePosture(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listPostures()
  .then((postures) => res.json(postures))
  .catch((err) => next(err));
});

module.exports = router;
