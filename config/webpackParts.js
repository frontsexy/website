/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.devServer = () => ({
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },
});

exports.js = ({
  include,
  exclude,
} = {}) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        exclude,
        use: 'babel-loader',
      },
    ],
  },
});

exports.page = ({
  template,
  title = 'App',
} = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template,
      title,
    }),
  ],
});
