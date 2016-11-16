'use strict';

const passport = require(`passport`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* LOGIN VIA GOOGLE */
router.get(`/google`, passport.authenticate(`google`, { scope: [`profile`] }));
router.get(`/google/callback`,
  passport.authenticate(`google`, { failureRedirect: `/` }),
  (req, res) => { res.redirect(`/`); }  /* TODO redirect to calendar */
);

/* LOGOUT */
router.delete(`/`, (req, res, next) => {
  req.session = null;
  res.sendStatus(200);
});

module.exports = router;
