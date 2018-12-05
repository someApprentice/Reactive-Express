const dotenv = require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: './src/app.js',
  
  target: 'node',

  node: {
    __dirname: false
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  }
};