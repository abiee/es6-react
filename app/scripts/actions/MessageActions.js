var AppDispatcher = require('../dispatcher/AppDispatcher');

var actions = {
  setMessage(message) {
    AppDispatcher.dispatch({
      action: 'SET_MESSAGE',
      message: message
    });
  }
}

module.exports = actions;
