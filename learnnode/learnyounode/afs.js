// async read of a file with calbacks

var fs = require('fs');

var fileName = process.argv[2];

function finishedRead(err, buff) {
    if (err)
        return console.error("error: " + err);

    console.log( buff.toString().split("\n").length - 1 );

};

fs.readFile(fileName, finishedRead);
