var express = require('express');
var app = express();
var data = require('./data.json');

app.get('/records', function(req,res){
    var age = Number(req.query.age);
    
    var newdata = data.filter(function(item){
        return item.age == age;
    });
    res.json(newdata);
});
app.listen(5400, function(){
    console.log('App works at 5400 port.')
});