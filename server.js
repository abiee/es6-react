var Twitter = require('Twitter');
var credentials = require('./twitterCredentials');

var SERVER_PORT = 8080;
var TWITTER_SEARCH = 'HoyViernesNoSalgoPorQue';
var client = new Twitter(credentials);

client.stream('statuses/filter', {track: TWITTER_SEARCH}, function(stream) {
  stream.on('data', function(data) {
    var tweet = {
      text: data.text,
      user: {
        profile_image: data.user.profile_image_url,
        screen_name: data.user.screen_name
      }
    };

    io.emit('tweet', tweet);
  });

  stream.on('error', function(error) {
    console.log('ERROR:', error);
  });
});

var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(SERVER_PORT, function() {
  console.log('Twitter server is running on port ', SERVER_PORT);
  console.log('Searching for term \'' + TWITTER_SEARCH + '\'');
});
