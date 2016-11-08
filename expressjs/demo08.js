var express = require('express');
var http = require('http');
var me = require('mustache-express');
var path = require('path');
var app = express();

var views = path.resolve(__dirname, "views");


// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get("/", function(req, res){
    res.end("Home\n")
});

app.get(function(req, res){
    res.statusCode(404);
    res.end("404!")
});


http.createServer(app).listen(3000);