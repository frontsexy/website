const path = require('path');
const merge = require('webpack-merge');
const parts = require('./config/webpackParts');

const paths = {
  app: path.join(__dirname, 'src'),
  template: path.join(__dirname, 'assets/index.html'),
};

const common = env => merge([
  parts.js({
    env,
    include: paths.app,
  }),
  parts.page({
    template: paths.template,
    title: 'Сделайте мне красиво',
  }),
  {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
]);

const development = merge([
  common('development'),
  parts.devServer(),
  {
    mode: 'development',
  },
]);

const production = merge([
  common('production'),
  {
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[id].[contenthash].js',
    },
  },
  {
    mode: 'production',
  },
]);

module.exports = env => (env === 'production' ? production : development);
