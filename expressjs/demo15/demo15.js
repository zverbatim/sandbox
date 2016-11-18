var fs = require('fs');
var parse = require('csv-parse')

fs.readFile('dummy.json', (err, data) => {
    if(err) console.error(err);
    console.log(JSON.parse(data.toString()))
});


fs.readFile('dummy.txt', (err, data)=> {
    if(err) console.error(err);
        parse(data, {comment: '#'}, function(err, output){
            if(err) return console.error(err)
            console.log(output)
        })
});