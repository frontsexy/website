module.exports = {
  plugins: [
    ['reshadow/babel', {
      files: /\.css$/,
      postcss: true,
    }],
  ],
  presets: [
    '@babel/preset-react',
    '@babel/env',
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
  },
};
