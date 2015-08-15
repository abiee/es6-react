import React from 'react';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <h3>{this.props.text}</h3>
        <p>{this.props.author}</p>
        <img src={this.props.avatar}/>
      </div>
    );
  }
}

export default Tweet;
