const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const getCustomTransformers = require('./ts-import-plugin')

const rootPath = path.resolve(__dirname, '../')
const outputPath = path.resolve(rootPath, './dist')
const tsConfigFilePath = path.resolve(rootPath, './tsconfig.json')

module.exports = {
  context: rootPath,
  output: {
    path: outputPath,
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigFilePath })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: tsConfigFilePath,
              getCustomTransformers,
            },
          },
        ],
      },
      {
        // 源文件中的less启用css module
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
        exclude: [/node_modules/],
      },
      {
        // 开源包内的样式都使用css, 不开启modules
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  stats: {
    modules: false,
  },
  plugins: [new AntdDayjsWebpackPlugin(), new MiniCssExtractPlugin({ filename: 'main.css' })],
}
