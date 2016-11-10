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

app.get('/', function (req, res){
    res.send("home")
});

app.get('/:id', function (req, res){
    var id = parseInt(req.params.id, 10);
    console.log("id = ", id);
    res.send('Passed param = ' + id + '\n');
});

// using the regex
app.get('/regex/:id(\\d+)', function(req, res){
    var id = parseInt(req.params[0], 10);
    console.log("id = ", id);
    res.send('Passed param = ' + id + '\n');
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});