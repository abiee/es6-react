import React from 'react';
import io from 'socket.io-client';
import TweetActions from './actions/TweetActions';
import AppDispatcher from './dispatcher/AppDispatcher';
import TweetStream from './components/TweetStream.jsx';

React.render(
  React.createElement(TweetStream, null),
  document.getElementById('main')
);

var socket = io('http://localhost:8080');

socket.on('tweet', TweetActions.newTweet);
