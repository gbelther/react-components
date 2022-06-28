const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackCommon, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: './dist',
    },
    devMiddleware: {
      writeToDist: true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/template.dev.html',
    }),
  ],
});
