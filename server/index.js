
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
const port = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.sendFile('../react-ui/public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log('got a message');
    io.emit('chat', msg);
  });
});

server.listen(port, function(){
  console.log('listening on *:8000');
});
