'use strict';

var _restify = require('restify');

var _bot = require('./bot');

// Setup Restify Server
const server = (0, _restify.createServer)();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url);
});

// Listen for messages from users
server.post('/api/messages', _bot.connector.listen());