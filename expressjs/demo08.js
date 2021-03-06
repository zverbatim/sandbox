var letters = [{order: 0, value: 'a'}, {order: 1, value: 'b'}, {order: 2, value: 'c'}];

var express = require('express');
var path = require("path");
var app = express();

var exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'demo08/views'));

// passing the layout can configure if using bootstrap or foundations
app.engine('handlebars', exphbs({
    defaultLayout: 'main',

    // Overwrite default location
    layoutsDir: path.resolve(__dirname, 'demo08/views/layouts'),

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'demo08/shared/templates/',
        'demo08/views/partials/'
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
    res.render('main', {body: 'Hello World using handlebars!', letters: letters});
});

app.use(express.static('public/'));

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '. Ctrl-C to terminate.');
});