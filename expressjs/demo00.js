var express = require('express');

var app = express();

app.get('/', function(res,req){
  res.send('working...');
});

app.listen(3000, function(){
  console.log('Server running n port 3000');
});
