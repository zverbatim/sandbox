http = require('fs');
bl = require('bl');


response.pipe(bl(function (err, data) { /* ... */ }))
