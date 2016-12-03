var fs = require('fs');
var parse = require('csv-parse')

//fs.readFile('dummy.json', (err, data) => {
//    if (err) console.error(err);
//    console.log(JSON.parse(data.toString()))
//});


fs.readFile('./demo15/dummy.txt', (err, data)=> {
    if (err) console.error(err);
    var foo = function (out){  console.log(out.length)
    console.log(out)}
    var o = parse(data, {comment: '#'}, function (err, output) {
        if (err) return console.error(err)
        foo(output)
    });

});