import React from 'react';
import Tweet from './Tweet.jsx';
import TweetStore from '../stores/TweetStore';

class TweetStream extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: TweetStore.getAllTweets()
    }
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._change.bind(this));
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._change.bind(this));
  }

  render() {
    var tweetsComponent = this.state.tweets.map(tweet => {
      return <Tweet text={tweet.text}
                    author={tweet.user.screen_name}
                    avatar={tweet.user.profile_image} />
    });

    return (
      <div>
        {tweetsComponent}
      </div>
    );
  }

  _change() {
    this.setState({tweets: TweetStore.getAllTweets()});
  }
}

export default TweetStream;
