'use strict';

const auth = require(`./auth`);
const entries = require(`./entries`);
const postures = require(`./postures`);
const series = require(`./series`);
const types = require(`./types`);
const users = require(`./users`);
const express = require(`express`); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

router.use(`/auth`, auth);
router.use(`/entries`, entries);
router.use(`/postures`, postures);
router.use(`/series`, series);
router.use(`/types`, types);
router.use(`/users`, users);

module.exports = router;
