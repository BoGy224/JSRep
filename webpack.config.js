var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: 'C:/Users/Vlad/Documents/JS/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    plugins: [new HtmlWebpackPlugin('C:/Users/Vlad/Documents/JS/index.html')]
};