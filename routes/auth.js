'use strict';

const passport = require(`passport`);
const express = require(`express`);         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* LOGIN VIA GOOGLE */
router.get(`/google`, passport.authenticate(`google`, { scope: [`profile`] }));
router.get(`/google/callback`,
  passport.authenticate(`google`, { failureRedirect: `/` }),
  (req, res) => { res.redirect(`/`); }
);

/* LOGOUT */
router.get(`/logout`, (req, res, next) => {
  req.session = null;
  res.redirect(`/`);
});

module.exports = router;
