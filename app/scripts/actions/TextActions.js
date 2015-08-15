import AppDispatcher from  '../dispatcher/AppDispatcher';

class TextActions {
  getText() {
    AppDispatcher.dispatch({action: 'GET_TEXT'});
  }

  setText(text) {
    AppDispatcher.dispatch({
      action: 'SET_TEXT', 
      text: text
    });
  }
}

export default new TextActions();
