/*var fs =require('fs');
var file = String('package.json');
fs.readFile(file, 'utf8', function(err, data){
    if (err) throw err;
    console.log(data);
});*/

var package = require('./package.json');
var dependencies = package.dependencies;

for(var key in dependencies) {
    console.log(key + ': ' + dependencies[key]);
}