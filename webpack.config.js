const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'public', 'dist');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: `${SRC_DIR}/index.jsx`
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: [/\.jsx$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
    },
    {
      test: /\.(css|less)$/,
      exclude: /node_modules/,
      use: [{ loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      }
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Score Tracker',
      template: `${SRC_DIR}/templates/index.ejs`,
      favicon: path.join(__dirname, 'public', 'assets', 'favicon.ico')
    }),
  ]
};