var fs = require('fs');

function readContent(callback) {
    fs.readFile("./sentimentdata/amazon_cells_labelled.txt", function (err, content) {
        if (err) return callback(err);
        callback(null, content)
    })
}

readContent(function (err, content) {
    console.log(content.toString())
});