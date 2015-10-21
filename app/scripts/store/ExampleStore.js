var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');

var message = '';
const CHANGE_EVENT = 'change';

class ExampleStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(payload => {
      let action = payload.action;

      switch (action) {
        case 'SET_MESSAGE':
          message = payload.message;
          break;

        default:
          return;
      }

      this.emitChange();
    });
  }

  getMessage() {
    return message;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

module.exports = new ExampleStore();
