'use strict';

const db = require(`../db/queries/users`);
const bcrypt = require(`bcrypt`);
const express = require(`express`); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

/* JOIN */
router.post(`/new`, (req, res, next) => {
  // const newUser = req.body;
});

/* LOGIN */
router.post(`/`, (req, res, next) => {
  // const user = req.body;
});

/* LOGOUT */
router.delete(`/`, (req, res, next) => {
  req.session = null;
  res.sendStatus(200);
});

module.exports = router;
