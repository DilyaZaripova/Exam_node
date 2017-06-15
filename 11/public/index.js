var socket = io();
        socket.on('message', function(text){
            console.log(text);
        });