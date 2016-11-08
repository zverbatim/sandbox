var express = require('express');
var http = require('http');
var app = express();

var EVIL_IP = "::1";

app.use(function(req, res, next) {
    console.log("Request coming from " + req.ip);
    if (req.ip === EVIL_IP) {
        res.status(401).send("Not allowed!");
    } else {
        next();
    }
});

app.get("/", function(req, res){
    res.end("Home\n")
});

app.get(function(req, res){
    res.statusCode(404);
    res.end("404!")
});


http.createServer(app).listen(3000);