const path = require('path');
const merge = require('webpack-merge');
const parts = require('./config/webpackParts');

const common = merge([
  parts.page({
    title: 'Сделайте мне красиво',
  }),
  {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
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
