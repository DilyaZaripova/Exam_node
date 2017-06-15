var express= require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app =express();
var data = require('./data.json');

var records = data.records;
var nextId = data.nextId;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('www'));


app.listen(5300, function(){
    console.log('App is running on port 5300.');
});

app.get('/records', function(req,res){
    res.json(records);
});

app.post('/records', function(req,res){
    var record = {
        id: nextId++,
        name: req.body.name,
        age: req.body.age
    };
    records.push(record);
    res.json(record);
    update();
});

app.get('/records/:id', function (req, res) {
    var id = req.params.id;
    var record = records.find(function(record) {
        return (record.id == id)
    });

    if (record) {
        req.foundRecord = record;
        var index = records.indexOf(req.foundRecord);
        records.splice(index, 1);
        res.send('Deleted');
        update();
    } else {
        res.statusCode = 404;
        res.send('Not found');
    }
});

function update() {
    fs.writeFile('./data.json', JSON.stringify({
        nextId: nextId,
        records: records
    }, 4));
}
