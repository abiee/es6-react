jest.dontMock('../HelloWorld.jsx');

var React = require('react/addons');

var HelloWorld = require('../HelloWorld.jsx');
var TestUtils = React.addons.TestUtils;

describe('HelloWorld component', function() {
  it('should display the right message', function() {
    var helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    );

    var message = helloWorld.getDOMNode().textContent
    expect(message).toContain('Hello from a react');
  });
});
