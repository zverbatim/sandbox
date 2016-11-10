// will hold all the messages submitted via the form
var messages = [];

var http = require('http');
var express = require('express');
var path = require("path");
var logger = require('morgan');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.use(logger("dev"));

// gets the req.body variable when a form is submitted
// extend option is required
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'demo09/views'));

// passing the layout can configure if using bootstrap or foundations
app.engine('handlebars', exphbs({
    defaultLayout: 'main',

    // Overwrite default location
    layoutsDir: path.resolve(__dirname, 'demo09/views/layouts'),

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'demo09/shared/templates/',
        'demo09/views/partials/'
    ]
}));

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
var options = {
    dotfiles: 'ignore',             // How dot files are treated
    etag: false,                    // Disable etag
    extenssions: ['htm', 'html'],   // Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found. Example: ['html', 'htm'].
    index: false                    //Sends the specified directory index file. Set to false to disable directory indexing.
};

app.use(express.static(path.join(__dirname, 'public'), options));

app.get('/', function (req, res) {
    res.render('main');
});

app.post('/submit-entry', function (req, res) {
    console.log('req.body = ', req.body);
    if (!req.body.message) {
        res.status(403);
        res.send("brrr ... empty body")
        return;
    }
    messages.push(req.body.message);
    res.redirect('entries');
});

app.get('/entries', function (req, res) {
    console.log("entries:", messages);
    res.render('entries', {messages: messages});
});

app.use(express.static('public/'));

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '. Ctrl-C to terminate.');
});