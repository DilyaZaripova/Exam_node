
var express = require('express');
var app = express();

//инсталляция  модуля socket.io
//создание http-сервера, связанный с сокетом
var server = require('http').createServer(app);//связанный с express посредством app
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

//прослушиваем server, не app
server.listen(3000, function () { console.log('Server is running on http://localhost:3000/') });

io.on('connection', function(socket) {
    console.log('Connection!');
    socket.on('message', function(text){
        //socket.emit('message', text);
        console.log(text);
    });
});