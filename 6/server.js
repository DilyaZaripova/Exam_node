var express = require('express');
//создание сервера на express
var app = express();


app.get('/echo', function (req, res) {
  res.send(req.url.substr(6));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});