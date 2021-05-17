const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'development',
  output: {
    publicPath: '/dist/',
  },
  entry: './src/entry/micro.tsx',
  // entry: ['./src/entry/spa/index.tsx'],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000, // 端口
    host: 'localhost',
    contentBase: './',
    historyApiFallback: true,
    // injectClient: false,
    // injectHot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}
module.exports = merge(common, dev)
