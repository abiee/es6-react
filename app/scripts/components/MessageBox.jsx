import React from 'react';

var MessageBox = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.message}</p>
    </div>
  );
};

MessageBox.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

export default MessageBox;
