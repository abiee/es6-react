var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'ES6 React boilplate',
      template: './index.ejs',
      devServer: true
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      include: [
        __dirname + '/app/scripts/'
      ]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: 'inline'
        }
      }],
      include: [
        __dirname + '/app/styles/',
        __dirname + '/node_modules/bootstrap/'
      ]
    }, {
      test: /\.(png|jpg|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name].[ext]'
        }
      },
      include: [
        __dirname + 'app/images/',
      ]
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    }]
  }
};
