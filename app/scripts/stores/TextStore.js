import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var privateData = {
  text: 'Hello flux'
};

class TextStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(payload => {
      var action = payload.action;

      switch(action) {
        case 'GET_TEXT':
          this.emitChange();
          break;

        case 'SET_TEXT':
          privateData.text = payload.text
          this.emitChange();
          break;
      }

      return true;
    });
  }

  getText() {
    return privateData.text;
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

export default new TextStore();
