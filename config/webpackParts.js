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

exports.page = ({
  title = 'App',
} = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
    }),
  ],
});
