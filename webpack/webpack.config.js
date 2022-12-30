const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// loaders

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, '..', './src/index.tsx'),

  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      // loader, babel-loader for ts,tsx,js,jsx
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      //
    ],
  },

  plugins: [
    // plugin HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
