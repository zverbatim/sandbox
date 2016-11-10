var express = require("express");
var path = require("path");
var logger = require("morgan");

var app = express();

app.use(logger("combined"));

app.use(function (req, res, next) {
    console.log("Request url: " + req.url);
    console.log("Request IP: " + req.ip);
    console.log("Request date: " + new Date());
    next();
});

// with static you get a tested middleware that checks
// you if the file exists and returns it, otherwise `next()` with a 404
var staticPath = path.join(__dirname, '/demo11/static');
app.use(express.static(staticPath));

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});