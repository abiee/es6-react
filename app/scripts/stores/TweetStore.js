import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var tweets = [];

class TweetStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(payload => {
      var action = payload.action;
      var tweet =  payload.tweet;

      switch(action) {
        case 'NEW_TWEET':
          tweets.unshift(tweet);
          this.emitChange();
          break;
      }

      return true;
    });
  }

  getAllTweets() {
    return tweets;
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

export default new TweetStore();
