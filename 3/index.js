var fs = require('fs');
//var number_1='Number_1.txt';
//var number_2='Number_2.txt';
fs.readFile('Number_1.txt', function(err,data1){
    if (err) throw err;
        fs.readFile('Number_2.txt', function(err,data2){
        if (err) throw err;
        var data=Number(data1)+Number(data2);
        fs.writeFile('output.txt',data,(err)=>{
            if (err) throw err;
            console.log('Saved in output.txt.');
        });

    });
});