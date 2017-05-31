var express = require('express');
var strftime = require('strftime');

var port = 8080;
var app = express();

function parseUnix(date) {
   if ( isNaN(date) ) {
    return null;
  } 
  return date;
}

function parseNatural(date) {
  if ( isNaN(date) ) {
    return null;
  }
  return (new Date(date)).toString();
}

function parseDate(date) {
  var parsedDate = Date.parse(date);
  return {
    "unix": parseUnix(parsedDate),
    "natural": parseNatural(parsedDate)
  }
}

app.all('/:DATE', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(parseDate(req.params.DATE)));
})

app.listen(port, function(err, data){
  console.log("express on port " + port);
});
