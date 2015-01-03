/*var app = require('http').(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  
app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });      
}

io.sockets.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    io.sockets.emit('third event', data);
  });
});*/
var express = require('express')
var app = express();
app.use(express.static(__dirname));
//app.use(express.static(__dirname + '/css/bootstrap.min.css'));
//app.use(express.static(__dirname + '/images/'));

var server = app.listen(process.env.PORT || 3000);
app.get('/', function(req,res) {
  res.sendFile(__dirname  + '/index.html');
    res.sendFile(__dirname  + '/css/bootstrap.min.css');
});    

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket) {
  socket.on('SetupPlayer1', function (data) {
    io.sockets.emit('SetupPlayer2', data);
  });
  socket.on('BuildForeignAidBlockLayout', function (data) {
    io.sockets.emit('BuildForeignAidBlockLayout', data);
  }); 
  socket.on('BuildStealAsCaptainLayout', function (data) {
    io.sockets.emit('BuildStealAsCaptainLayout', data);
  });
  socket.on('PlayerBlockedForeignAid', function (data) {
    io.sockets.emit('PlayerBlockedForeignAid', data);
  });
  socket.on('PlayerUnBlockedForeignAid', function (data) {
    io.sockets.emit('PlayerUnBlockedForeignAid', data);
  });  
  socket.on('PlayerBlockedDuke', function (data) {
    io.sockets.emit('PlayerBlockedDuke', data);
  });
  socket.on('PlayerUnBlockedDuke', function (data) {
    io.sockets.emit('PlayerUnBlockedDuke', data);
  }); 
  socket.on('PlayerUnBlockedStealAsCaptain', function (data) {
    io.sockets.emit('PlayerUnBlockedStealAsCaptain', data);
  });
  socket.on('PlayerHasDuke', function (data) {
    io.sockets.emit('PlayerHasDuke', data);
  });
  socket.on('PlayerBluffDuke', function (data) {
    io.sockets.emit('PlayerBluffDuke', data);
  });
  socket.on('PlayerSaidBluffCaptain', function (data) {
    io.sockets.emit('PlayerSaidBluffCaptain', data);
  });
  socket.on('PlayerSaidBluffAssassin', function (data) {
    io.sockets.emit('PlayerSaidBluffAssassin', data);
  });
  socket.on('PlayerHasAssassin', function (data) {
    io.sockets.emit('PlayerHasAssassin', data);
  });
  socket.on('PlayerBluffCaptain', function (data) {
    io.sockets.emit('PlayerBluffCaptain', data);
  });
  socket.on('PlayerBluffContessa', function (data) {
    io.sockets.emit('PlayerBluffContessa', data);
  });
  socket.on('PlayerSaidBluffContessa', function (data) {
    io.sockets.emit('PlayerSaidBluffContessa', data);
  });  
  socket.on('GameOver', function (data) {
    io.sockets.emit('GameOver', data);
  });
  socket.on('PlayerSaidHasCaptain', function (data) {
    io.sockets.emit('PlayerSaidHasCaptain', data);
  });
  socket.on('PlayerSaidHasContessa', function (data) {
    io.sockets.emit('PlayerSaidHasContessa', data);
  });
    socket.on('UpdateDisabled', function (data) {
    io.sockets.emit('UpdateDisabled', data);
  });
  socket.on('PlayerStealHasAmbassador', function (data) {
    io.sockets.emit('PlayerStealHasAmbassador', data);
  });
  socket.on('PlayerSaidBluffAmbassador', function (data) {
    io.sockets.emit('PlayerSaidBluffAmbassador', data);
  });
  socket.on('DukeBlockLayout', function (data) {
    io.sockets.emit('DukeBlockLayout', data);
  });
  socket.on('RemoveCard', function (data) {
    io.sockets.emit('RemoveCard', data);
  });
   socket.on('CoupPlayer', function (data) {
    io.sockets.emit('CoupPlayer', data);
  });
  socket.on('AnnounceRemovedCard', function (data) {
    io.sockets.emit('AnnounceRemovedCard', data);
  });
  socket.on('ExchangeAmbassadorLayout', function (data) {
    io.sockets.emit('ExchangeAmbassadorLayout', data);
  });
  socket.on('PlayerBlockedAmbassador', function (data) {
    io.sockets.emit('PlayerBlockedAmbassador', data);
  });
  socket.on('PlayerUnBlockedAmbassador', function (data) {
    io.sockets.emit('PlayerUnBlockedAmbassador', data);
  });
  socket.on('PlayerHasAmbassador', function (data) {
    io.sockets.emit('PlayerHasAmbassador', data);
  });
  socket.on('AssassinPlayer', function (data) {
    io.sockets.emit('AssassinPlayer', data);
  });
  /*socket.on('ActionBlockedForeignAid', function (data) {
    io.sockets.emit('ActionBlockedForeignAid', data);
  });*/
  
});

