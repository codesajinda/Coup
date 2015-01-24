var express = require('express')
var app = express();
app.use(express.static(__dirname));

var server = app.listen(process.env.PORT || 3000);
app.get('/');
var io = require('socket.io').listen(server)
var rooms = [];
var usernames ={};
var currentRoom = '';
io.sockets.on('connection', function (socket) {
  socket.on('AddUser', function(username, room){
   if(username!="" && room != ""){
		currentRoom = room.toString();
		// store the username in the socket session for this client		
		socket.username = username;
		// store the room name in the socket session for this client
		socket.room = currentRoom;
		// add the client's username to the global list
		usernames[username] = username;
		rooms.push(currentRoom);
		// send client to room 1
		socket.join(currentRoom);
		// echo to client they've connected
		socket.emit('ConnectionStatus', 'SERVER', 'you have connected to ' + currentRoom);
		// echo to room  that a person has connected to their room
		socket.broadcast.to(currentRoom).emit('ConnectionStatus', 'SERVER', username + ' has connected to this room');
	}
  });
  socket.on('SetupPlayer1', function (data) {
    io.sockets.in(socket.room).emit('SetupPlayer2', data);
  });
  socket.on('BuildForeignAidBlockLayout', function (data) {
    io.sockets.in(socket.room).emit('BuildForeignAidBlockLayout', data);
  }); 
  socket.on('BuildStealAsCaptainLayout', function (data) {
    io.sockets.in(socket.room).emit('BuildStealAsCaptainLayout', data);
  });
  socket.on('PlayerBlockedForeignAid', function (data) {
    io.sockets.in(socket.room).emit('PlayerBlockedForeignAid', data);
  });
  socket.on('PlayerUnBlockedForeignAid', function (data) {
    io.sockets.in(socket.room).emit('PlayerUnBlockedForeignAid', data);
  });  
  socket.on('PlayerBlockedDuke', function (data) {
    io.sockets.in(socket.room).emit('PlayerBlockedDuke', data);
  });
  socket.on('PlayerBlockedForeignAidDuke', function (data) {
    io.sockets.in(socket.room).emit('PlayerBlockedForeignAidDuke', data);
  });
  socket.on('PlayerUnBlockedDuke', function (data) {
    io.sockets.in(socket.room).emit('PlayerUnBlockedDuke', data);
  }); 
  socket.on('CannotStealAsCaptainNoIncome', function (data) {
    io.sockets.in(socket.room).emit('CannotStealAsCaptainNoIncome', data);
  }); 
  socket.on('PlayerUnBlockedStealAsCaptain', function (data) {
    io.sockets.in(socket.room).emit('PlayerUnBlockedStealAsCaptain', data);
  });
  socket.on('PlayerHasDuke', function (data) {
    io.sockets.in(socket.room).emit('PlayerHasDuke', data);
  });
  socket.on('PlayerBluffDuke', function (data) {
    io.sockets.in(socket.room).emit('PlayerBluffDuke', data);
  });
  socket.on('PlayerSaidBluffCaptain', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidBluffCaptain', data);
  });
  socket.on('PlayerSaidBluffAssassin', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidBluffAssassin', data);
  });
  socket.on('PlayerHasAssassin', function (data) {
    io.sockets.in(socket.room).emit('PlayerHasAssassin', data);
  });
  socket.on('PlayerBluffCaptain', function (data) {
    io.sockets.in(socket.room).emit('PlayerBluffCaptain', data);
  });
  socket.on('PlayerBluffContessa', function (data) {
    io.sockets.in(socket.room).emit('PlayerBluffContessa', data);
  });
  socket.on('PlayerSaidBluffContessa', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidBluffContessa', data);
  });  
  socket.on('GameOver', function (data) {
    io.sockets.in(socket.room).emit('GameOver', data);
  });
  socket.on('PlayerSaidHasCaptain', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidHasCaptain', data);
  });
  socket.on('PlayerSaidHasContessa', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidHasContessa', data);
  });
    socket.on('UpdateDisabled', function (data) {
    io.sockets.in(socket.room).emit('UpdateDisabled', data);
  });
  socket.on('PlayerStealHasAmbassador', function (data) {
    io.sockets.in(socket.room).emit('PlayerStealHasAmbassador', data);
  });
  socket.on('PlayerSaidBluffAmbassador', function (data) {
    io.sockets.in(socket.room).emit('PlayerSaidBluffAmbassador', data);
  });
  socket.on('DukeBlockLayout', function (data) {
    io.sockets.in(socket.room).emit('DukeBlockLayout', data);
  });
  socket.on('RemoveCard', function (data) {
    io.sockets.in(socket.room).emit('RemoveCard', data);
  });
   socket.on('CoupPlayer', function (data) {
    io.sockets.in(socket.room).emit('CoupPlayer', data);
  });
  socket.on('AnnounceRemovedCard', function (data) {
    io.sockets.in(socket.room).emit('AnnounceRemovedCard', data);
  });
  socket.on('ExchangeAmbassadorLayout', function (data) {
    io.sockets.in(socket.room).emit('ExchangeAmbassadorLayout', data);
  });
  socket.on('PlayerBlockedAmbassador', function (data) {
    io.sockets.in(socket.room).emit('PlayerBlockedAmbassador', data);
  });
  socket.on('PlayerUnBlockedAmbassador', function (data) {
    io.sockets.in(socket.room).emit('PlayerUnBlockedAmbassador', data);
  });
  socket.on('PlayerHasAmbassador', function (data) {
    io.sockets.in(socket.room).emit('PlayerHasAmbassador', data);
  });
  socket.on('AssassinPlayer', function (data) {
    io.sockets.in(socket.room).emit('AssassinPlayer', data);
  });  
});

