/* eslint-disable new-cap, camelcase */
'use strict';

const db = require(`../db/queries/entries`);
const express = require(`express`);
const fs = require(`fs`);
const cloudinary = require(`cloudinary`);
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_KEY}`,
  api_secret: `${process.env.CLOUDINARY_SECRET}`,
});
const formidable = require(`formidable`);
const router = express.Router();

/* CREATE */
router.post(`/`, (req, res, next) => {
  const form = new formidable.IncomingForm();
  const save = (newEntry) => {
    db.createEntry(newEntry)
    .then(() => res.sendStatus(200))
    .catch((error) => next(error));
  };

  form.parse(req, (err, fields, files) => {
    if (err) { next(err); }
    if (files.photo) {
      cloudinary.uploader.upload(files.photo.path, (result) => {
        fields.photo = result.secure_url;
        save(fields);
      });
    }
    else { save(fields); }
  });
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
  const form = new formidable.IncomingForm();
  const id = req.params.id;
  const save = (updates) => {
    db.updateEntry(id, updates)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
  };

  form.parse(req, (err, fields, files) => {
    if (err) { next(err); }
    if (files.photo) {
      cloudinary.uploader.upload(files.photo.path, (result) => {
        fields.photo = result.secure_url;
        save(fields);
      });
    }
    else { save(fields); }
  });
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
  console.log('i got here');
  db.listEntries()
  .then((entries) => res.json(entries))
  .catch((err) => next(err));
});

module.exports = router;
