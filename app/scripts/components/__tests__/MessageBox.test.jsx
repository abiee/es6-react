jest.dontMock('../MessageBox.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import MessageBox from '../MessageBox.jsx';

describe('HelloWorld component', () => {
  it('should display the right message', () => {
    const tree = renderer.create(
      <MessageBox title="Example title" message="Hello world!" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
