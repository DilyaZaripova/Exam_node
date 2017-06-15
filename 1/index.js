//var http = require('http');
var fs = require('fs');
var file = String(process.argv[2]);
//http.createServer(function (req, res) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
        console.log(data.length);
      //res.writeHead(200, {'Content-Type': 'text/html'});
        //res.write(data.length);
        //return res.end();
    });
//}).listen(8080);