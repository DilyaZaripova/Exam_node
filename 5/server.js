/*var http = require('http');

var server = http.createServer();
var port = 7702;

server.listen(port);
console.log('Server is running on' + port);

server.on('request', function(req, res) {
   if(req.url == '/time'){
        var now = new Date().toDateString();
        res.end(String(now));
        console.log(now);
    } else {
        res.statusCode = 404;
        res.end('Return: not found');
        console.log('Return: ' + now);
    }
});*/

var express = require('express');
//создание сервера на express
var app = express();


app.get('/time', function (req, res) {
    var date = new Date();
    res.send(date.toLocaleString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});