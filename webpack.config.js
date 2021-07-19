const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
   swiper: './js/partials/swiper.min.js',
   main: './js/main.js',   
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
   new HTMLWebpackPlugin({
    template: './html/index.html'
   }),
   new HTMLWebpackPlugin({
    filename: 'contact.html',
    template: './html/contact.html'
   }),
   new CleanWebpackPlugin()
  ],
  module: {
   rules: [
    {
     rest: /\.css$/,
     use: ['style-loader', 'css-loader']
    }
   ]
  },
};