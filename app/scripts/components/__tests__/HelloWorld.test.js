jest.dontMock('../HelloWorld.jsx');

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var HelloWorld = require('../HelloWorld.jsx');

describe('HelloWorld component', function() {
  it('should display the right message', function() {
    var helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    );

    var message = ReactDOM.findDOMNode(helloWorld).textContent;
    expect(message).toContain('Hello from a react');
  });
});
