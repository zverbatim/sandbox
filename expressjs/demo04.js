var express = require('express');
var http = require('http');
var app = express();

app.use(function (req, res, next) {
    console.log("Getting the request for", req.url);
    next();
});

// pseudo login method
app.use(function (req, res, next) {
    if (Math.random() > 0.5) {
        next();
    } else {
        res.writeHead(403, {
            'Content-Type': 'text/plain'
        });
        res.end("Access denied");
    }
});

app.use(function (req, res) {
    console.log("working...");
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Response for browser: Working!")

});

http.createServer(app).listen(3000);