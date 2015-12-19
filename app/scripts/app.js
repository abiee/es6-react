var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./components/HelloWorld.jsx');

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('main')
);
