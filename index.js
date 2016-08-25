/**
*   Postman Server
*   Copyright (c) 2016 Tomas Kostadinov <tomas.kostadinov(at)gmx.de
**/

/**
*   Setup
**/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


/**
*   Server
**/

server.listen(port, function () {
  console.log('[Server] started');
  console.log('[Server] Listening at port %d', port);
});

/**
*   Routing for web
**/

io.on('connection', function(socket){
  console.log('Client connected');
});

//app.use(require('express-status-monitor')())

app.use(express.static(__dirname + '/public'));

app.get('/api/v1/message', function (req, res) {
  var msg = String(req.param('msg'));
  //var json = JSON.parse(msg);
  console.log("Message received")
  res.send("{}")
  io.sockets.emit('notification', String(msg));
});
