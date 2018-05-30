var fs = require('fs') // require is a special function provided by node
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    
    console.log("in add one");

    callback();
  })
}

function logMyNumber(){
    console.log("in log my number ")
    console.log( myNumber );
}

addOne( logMyNumber );
console.log("in main after addOne( logMyNumber )");
