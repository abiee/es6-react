/* eslint no-console: 0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  stats: {
    assets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
  },
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
