var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');

require('dotenv').config();
console.log(path.resolve(__dirname, 'config'));
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './index.tsx',
  devtool: 'inline-source-map',
  plugins: [
    // new HTMLPlugin({
    //   inject: true,
    //   template: './index.html',
    // }),
    new webpack.DefinePlugin({
      GRAPHQL_URL: JSON.stringify(process.env.GRAPHQL_URL),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      config: path.resolve(__dirname, 'config'),
      screens: path.resolve(__dirname, 'screens'),
      shared: path.resolve(__dirname, 'shared'),

    },
  },
};
