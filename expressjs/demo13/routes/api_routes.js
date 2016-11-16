var express = require("express");

var ALLOWED_IPS = [
    "::1",
    "127.0.0.1",
    "111.222.3.44"
];

var api = express.Router();

api.use(function(req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if (!userIsAllowed) {
        res.status(401).send("Not authorized!");
    } else {
        next();
    }
});

api.get("/", function(req, res) { res.send("home\n") });
api.get("/about", function(req, res) { res.send("about\n") });
api.get("/contact", function(req, res) { res.send("contact\n") });

module.exports = api;