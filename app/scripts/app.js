var React = require('react');
var HelloWorld = require('./components/HelloWorld.jsx');
var AppDispatcher = require('./dispatcher/AppDispatcher');
var ExampleStore = require('./store/ExampleStore');

React.render(
  <HelloWorld />,
  document.getElementById('main')
);

ExampleStore.addChangeListener(() => {
  console.log(ExampleStore.getMessage());
});

AppDispatcher.dispatch({
  action: 'SET_INVOICE',
  invoice: {}
});
