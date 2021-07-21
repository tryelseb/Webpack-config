const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development' // hmr - hott mode reload
console.log("IS DEV:", isDev);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (!isDev) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
   swiper: './js/partials/swiper.min.js',
   main: './js/main.js',   
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: optimization(),
  plugins: [
   new HTMLWebpackPlugin({
    template: './html/index.html',
    minify: {
      collapseWhitespace: !isDev
    }
   }),
   new HTMLWebpackPlugin({
    filename: 'contact.html',
    template: './html/contact.html'
   }),
   new CleanWebpackPlugin(),
   new MiniCssExtractPlugin(
     {
      filename: filename('css')
     }
   )
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
   rules: [
    {
     test: /\.css$/,
     use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.s[ac]ss$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
     },
   ]
  },
};