'use strict';

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require(`express`);
const path = require(`path`);
const logger = require(`morgan`);
const cookieSession = require(`cookie-session`);
const cookieParser = require(`cookie-parser`);
const bodyParser = require(`body-parser`);
const api = require(`./routes/api`);

const app = express();

app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `../client`)));
app.use(cookieSession({
  name: `session`,
  secret: process.env.SECRET,
  httpOnly: false,
}));

app.use(`/api`, api);

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../client/views`, `index.html`));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found`);
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get(`env`) === `development` ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(`error`);
});

module.exports = app;
