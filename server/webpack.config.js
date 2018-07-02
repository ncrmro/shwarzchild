const webpack = require('webpack');
const path = require('path');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  bail: !DEV,
  mode: "development",
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  externals: (context, request, callback) => {
    // Externalize all npm modules.
    if (/^[a-z0-9-][a-z0-9-./]+$/.test(request)) {
      return callback(null, `commonjs ${request}`);
    }
    callback();
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      // prettier-ignore
      'process.env.NODE_ENV': JSON.stringify(DEV ? 'development' : 'production'),
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
};