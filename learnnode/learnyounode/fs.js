// read synchronously files

// require the model
var fs  = require('fs');

var fileName = process.argv[2];
var buff = fs.readFileSync( fileName );
var lines = buff.toString().split("\n");

console.log( lines.length - 1 );
