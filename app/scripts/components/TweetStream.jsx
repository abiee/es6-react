import React from 'react';
import TweetStore from '../stores/TweetStore';
import StreamInfo from './StreamInfo.jsx';
import EmptyStream from './EmptyStream.jsx';
import Tweet from './Tweet.jsx';

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
                    avatar={tweet.user.profile_image} />;
    });

    if (tweetsComponent.length === 0) {
      tweetsComponent = <EmptyStream />;
    }

    return (
      <div className="col-xs-12 col-lg-offset-3 col-lg-6">
        <StreamInfo />
        {tweetsComponent}
      </div>
    );
  }

  _change() {
    this.setState({tweets: TweetStore.getAllTweets()});
  }
}

export default TweetStream;
