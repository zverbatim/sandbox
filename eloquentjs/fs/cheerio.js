var request = require('request');
var cheerio = require('cheerio');

request('http://quaintous.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        $('h3').each(function (index, el) {
            console.log(el.children[0].data);
        });
    }
});