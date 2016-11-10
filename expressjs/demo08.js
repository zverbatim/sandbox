var letters = [{order: 0, value: 'a'}, {order: 1, value: 'b'}, {order: 2, value: 'c'}];

var express = require('express');
var path = require("path");
var app = express();

var exphbs = require('express-handlebars');

// passing the layout can configure if using bootstrap or foundations
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: [
        'shared/templates/',
        'views/partials/'
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


// Source: https://github.com/ericf/express-handlebars/blob/master/examples/advanced/server.js
// Middleware to expose the app's shared templates to the cliet-side of the app
// for pages which need them.
function exposeTemplates(req, res, next) {
    // Uses the `ExpressHandlebars` instance to get the get the **precompiled**
    // templates which will be shared with the client-side of the app.
    hbs.getTemplates('shared/templates/', {
        cache      : app.enabled('view cache'),
        precompiled: true
    }).then(function (templates) {
            // RegExp to remove the ".handlebars" extension from the template names.
            var extRegex = new RegExp(hbs.extname + '$');

            // Creates an array of templates which are exposed via
            // `res.locals.templates`.
            templates = Object.keys(templates).map(function (name) {
                return {
                    name    : name.replace(extRegex, ''),
                    template: templates[name]
                };
            });

            // Exposes the templates during view rendering.
            if (templates.length) {
                res.locals.templates = templates;
            }

            setImmediate(next);
        })
        .catch(next);
}

app.get('/', function (req, res) {
    res.render('main', {body: 'Hello World using handlebars!', letters: letters});
});

//app.listen(app.get('port'), function () {
//    console.log('Express started on http://localhost:' +
//        app.get('port') + '. Ctrl-C to terminate.');
//});

app.use(express.static('public/'));

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});