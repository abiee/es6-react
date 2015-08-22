import React from 'react';

class Tweet extends React.Component {
  render() {
    var userProfileUrl = "https://twitter.com/" + this.props.author;

    return (
      <div className="media tweet">
        <a className="pull-left" href={userProfileUrl}>
          <img className="media-object img-circle" src={this.props.avatar} />
        </a>
        <div className="media-body">
          <h4 className="media-heading">{this.props.text}</h4>
          <a href={userProfileUrl}>@{this.props.author}</a>
        </div>
      </div>
    );
  }
}

export default Tweet;
