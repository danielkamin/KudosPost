/* eslint-disable no-undef */
const path = require('path');
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
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          }
        ],
      },
      
    ]
  },
  resolve: {
    extensions: ['*', '.js','.jsx']
  },
  output:{
    path:path.join(__dirname,'/dist'),
    filename:'bundle.js',
  },
  devServer:{
    contentBase: path.resolve(__dirname, './dist'),
    hot:true
  },
}