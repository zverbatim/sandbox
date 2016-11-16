var express = require("express");
var path = require("path");
var logger = require("morgan");
var apiRoutes = require("./demo13/routes/api_routes");

var app = express();

app.use(logger("combined"));

app.use(function (req, res, next) {
    console.log("Request url: " + req.url);
    console.log("Request IP: " + req.ip);
    console.log("Request date: " + new Date());
    next();
});

// routing for home
app.get("/", function(req, res) { res.send("home\n") });

// routing for api
app.use("/api", apiRoutes);

app.listen(3000, function () {
    console.log("App started on port 3000");
});