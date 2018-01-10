const webpack = require('webpack'),
      merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      path = require('path');


 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
   },
   watch: true
 });