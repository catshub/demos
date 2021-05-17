const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.common')

const prod = {
  mode: 'production',
  entry: './src/entry/micro.tsx',
  output: {
    library: 'cli',
    libraryTarget: 'umd',
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
}

module.exports = merge(common, prod)
