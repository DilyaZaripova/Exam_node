var http = require('http');

var server = http.createServer();

var port = 7701;
server.listen(port);
console.log('Server is running on ' + port);

server.on('request', function(req, res) {
    if (req.url == '/dice') {
        var number = Math.floor( Math.random() * 6 ) + 1;
        res.end( String(number) );
        console.log('Return: ' + number);
    } else {
        res.statusCode = 404;
        res.end('Return: not found');
        console.log('Return: ' + number);
    }
});