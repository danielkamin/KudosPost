/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname,'./src/index.js'),
  module: {
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:['babel-loader', 'eslint-loader'],
      },
      {
        test:/\.(css)$/,
        use:['style-loader','css-loader','sass-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js','.jsx']
  },
  output:{
    path:path.join(__dirname,'/dist'),
    filename:'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer:{
    contentBase: path.resolve(__dirname, './dist'),
    hot:true
  },
}