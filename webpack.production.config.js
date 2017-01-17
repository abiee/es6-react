var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom'
    ],
    app: './app/scripts/app.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        __dirname + '/app/scripts/'
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss?sourceMap=inline',
      include: [
        __dirname + '/app/styles/',
        __dirname + '/node_modules/bootstrap/'
      ]
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'url?limit=8192&name=images/[name].[ext]',
      include: [
        __dirname + 'app/images/',
      ],
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ES6 React boilplate',
      template: './index.ejs'
    })
  ],
  postcss: [ ]
};