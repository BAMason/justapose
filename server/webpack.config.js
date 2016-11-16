'use strict';

module.exports = {
  entry: `../client/js/app.js`,

  output: {
    filename: `bundle.js`,
    publicPath: ``,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `babel`,
        query: {
          presets: [`es2015`, `react`],
        },
      },
    ],
  },
};
