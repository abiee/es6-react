import AppDispatcher from  '../dispatcher/AppDispatcher';

class TweetActions {
  newTweet(tweet) {
    AppDispatcher.dispatch({
      action: 'NEW_TWEET',
      tweet: tweet
    });
  }
}

export default new TweetActions();
