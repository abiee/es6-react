import React from 'react';

class EmptyStream extends React.Component {
  render() {
    return (
      <div className="empty-stream">
        <span className="glyphicon glyphicon-cloud-download"></span>
        <h3>Waiting for tweets...</h3>
      </div>
    );
  }
}

export default EmptyStream;
