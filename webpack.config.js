const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
  context: path.resolve(__dirname, 'src/'),
  entry: './App.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/client'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: '/node_modules/' },
    ],
  },
  plugins: [
  ],
};

module.exports = config;
