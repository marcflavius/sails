const path = require('path');

module.exports = {
  mode:'development',
  entry: './assets/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'}, {loader: 'css-loader?sourceMap'}, {loader: 'sass-loader?sourceMap'}
        ]
      }, {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]'
          }
        ]
      }, {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', '@babel/preset-react'
              ]   // must set the preset, define the compile compatibility eg: firefox, ie9
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      }
    ],

    noParse: /\.min\.js/
  }
};
