module.exports = {
  plugins: [
    ['reshadow/babel', {
      files: /\.css$/,
    }],
  ],
  presets: [
    '@babel/preset-react',
    '@babel/env',
  ],
};
