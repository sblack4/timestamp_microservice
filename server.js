var express = require('express');

var port = 8080;
var app = express();

app.get('/', function(req, res) {
  res.end('Hello World');
})

app.listen(port, function(err, data){
  console.log("express on port " + port);
});
