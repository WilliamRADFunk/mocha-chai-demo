var express = require("express");
var app = express();
var converter = require("./functions");

// viewed at http://localhost:3000
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000);



/*
app.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});
*/