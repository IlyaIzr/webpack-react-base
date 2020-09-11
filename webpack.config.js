const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

entry: "./src/Index.js",
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
},

optimization: {
  splitChunks: {
    chunks: 'all',
  },
},

module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
},

plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" })]
};