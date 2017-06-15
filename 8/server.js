/*var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res) {
    var count = Number(req.query.count);
    var offset = Number(req.query.offset);

    var newdata = data.slice(offset, offset + count);

    res.json(newdata);
});

app.listen(5300, function() {
    console.log('Application works on port 5300');
});*/








var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req,res){
    var offset = Number(req.query.offset);
    var count = Number(req.query.count);
    var newdata = data.slice(offset, offset+count);
    
    res.json(newdata);
});

app.listen(5300, function(){
    console.log('App works at port 5300.');
});