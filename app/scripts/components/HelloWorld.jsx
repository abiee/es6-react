var React = require('react');
var MessageActions = require('../actions/MessageActions');
var ExampleStore = require('../store/ExampleStore');

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ExampleStore.getMessage()
    }
  }

  sendMessage() {
    var message = this.refs.text.value;
    MessageActions.setMessage(message);
  }

  componentDidMount() {
    ExampleStore.addChangeListener(this._change.bind(this));
  }

  componentWillUnmount() {
    ExampleStore.removeListener(this._change.bind(this));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <input className='form-control'
               ref='text'
               type='text'
               placeholder='put your message here' />
        <button className='btn btn-primary'
                onClick={this.sendMessage.bind(this)}>
          Send message
        </button>
      </div>
    );
  }

  _change() {
    this.setState({
      message: ExampleStore.getMessage()
    });
  }
}

export default HelloWorld;
