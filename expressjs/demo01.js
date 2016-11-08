var url = require('url')
var link = "http://www.google.comi?data=foo"

var p = url.parse(link);

console.log(p.protocol)
console.log(p.host)
console.log(p.query)
