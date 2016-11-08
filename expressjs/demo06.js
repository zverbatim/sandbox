var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var app = express();

// load statisc files both from `/public` and `\public`
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// routing examples
app.get("/", function(req, res){
    res.end("Home\n")
});

app.get("/about", function(req, res){
    res.end("About\n")
});

// getting data from param
app.get("/bar/:foo", function(req, res){
    res.end("Passed param " + req.params.foo + "\n");
});

// doing a redirect
app.use(function(req, res){
    res.redirect("/")
});

app.get(function(req, res){
    res.statusCode(404);
    res.end("404!")
});


http.createServer(app).listen(3000);