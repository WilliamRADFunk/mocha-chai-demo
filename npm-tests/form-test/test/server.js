var request = require("request");
var express = require("express");
var app = express();
var open = require('open');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

open('http://localhost:3000/');
// viewed at http://localhost:3000
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});
app.get('/functions.js', function(req, res)
{
	res.sendFile(__dirname + '/functions.js');
});
app.get('/app/functions.js', function(req, res)
{
	res.sendFile(__dirname.substr(0, __dirname.length-5) + '/app/functions.js');
});
app.post('/:results', function(req, res)
{
	console.log("Hello");
	console.log(req.body.results);
});

app.listen(3000);



/*
describe("Color Code Converter API", function() {

  describe("RGB to Hex conversion", function() {

	var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

	it("returns status 200", function(done) {
	  request(url, function(error, response, body) {
		expect(response.statusCode).to.equal(200);
		done();
	  });
	});

	it("returns the color in hex", function(done) {
	  request(url, function(error, response, body) {
		expect(body).to.equal("ffffff");
		done();
	  });
	});

  });

  describe("Hex to RGB conversion", function() {
	var url = "http://localhost:3000/hexToRgb?hex=00ff00";

	it("returns status 200", function(done) {
	  request(url, function(error, response, body) {
		expect(response.statusCode).to.equal(200);
		done();
	  });
	});

	it("returns the color in RGB", function(done) {
	  request(url, function(error, response, body) {
		expect(body).to.equal("[0,255,0]");
		done();
	  });
	});
  });

});
*/