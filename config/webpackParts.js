/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.devServer = () => ({
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },
});

exports.js = ({
  env,
  include,
  exclude,
} = {}) => {
  const isDev = env === 'development';

  return {
    ...isDev && {
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin(!isDev && {
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.jsx?$/,
          include,
          exclude,
          use: [
            'reshadow/webpack/loader',
            'babel-loader',
          ],
        },
      ],
    },
  };
};

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
