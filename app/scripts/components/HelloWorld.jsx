import React from 'react';
import TextStore from '../stores/TextStore';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      text: TextStore.getText()
    }
  }

  componentDidMount() {
    TextStore.addChangeListener(this._change.bind(this));
  }

  componentWillUnmount() {
    TextStore.removeChangeListener(this._change.bind(this));
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
  
  _change() {
    this.setState({text: TextStore.getText()});
  }
}

export default HelloWorld;
