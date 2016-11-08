var express = require('express');
var http = require('http');
var morgan = require('morgan');
var app = express();

// use the morgan logger
app.use(morgan("short"));

app.use(function (req, res) {
    console.log("working...");
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Response for browser: Working!")

});

http.createServer(app).listen(3000);