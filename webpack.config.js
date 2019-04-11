const path = require('path');
const merge = require('webpack-merge');
const parts = require('./config/webpackParts');

const paths = {
  app: path.join(__dirname, 'src'),
  template: path.join(__dirname, 'src/index.html'),
};

const common = merge([
  parts.js({
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
  common,
  parts.devServer(),
  {
    mode: 'development',
  },
]);

const production = merge([
  common,
  {
    mode: 'production',
  },
]);

module.exports = env => (env === 'production' ? production : development);
