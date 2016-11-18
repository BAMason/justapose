'use strict';
const webpack = require(`webpack`);
const path = require(`path`);

module.exports = {
  entry: `./index.js`,

  output: {
    path: `public`,
    filename: `bundle.js`,
    publicPath: `/`,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `babel-loader?presets[]=es2015&presets[]=react`,
      },
    ],
  },

  resolveLoader: {
    root: path.join(__dirname, `node_modules`),
  },

  plugins: process.env.NODE_ENV === `production` ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
};
