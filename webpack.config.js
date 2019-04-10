const path = require('path');
const merge = require('webpack-merge');
const parts = require('./config/webpackParts');

const paths = {
  app: path.join(__dirname, 'src'),
};

const common = merge([
  parts.js({
    include: paths.app,
  }),
  parts.page({
    title: 'Сделайте мне красиво',
  }),
  {
    resolve: {
      alias: {
        '@': paths.app,
      },
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
