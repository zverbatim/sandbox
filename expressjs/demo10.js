var express = require("express");
var path = require("path");
var fs = require("fs");
var logger = require("morgan");

var app = express();

app.use(logger("combined"));

app.use(function (req, res, next) {
    console.log("Request url: " + req.url);
    console.log("Request IP: " + req.ip);
    console.log("Request date: " + new Date());
    next();
});

app.use(function (req, res, next) {
    var filePath = path.join(__dirname, "/demo10/static", req.url);
    console.log("filePath = ", filePath);
    fs.stat(filePath, function (err, fileInfo) {
        if (err) {
            console.error("file = ", filePath, "not found.");
            next();
            return;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});