var colors = require('colors');
var request = require("request");
var express = require("express");
var app = express();
var open = require('open');
var bodyParser = require('body-parser');
var mocha = require('mocha');
var expect = require('chai').expect;
var should = require('chai').should();
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
app.post('/testResults', function(req, res)
{
	displayResults(req.body.tests);
	res.send('transmission received');
});

app.listen(3000);

function displayResults(results)
{
	for(var i = 0; i < results.length; i++)
	{
		console.log("");
		if(results[i].innerTests)
		{
			console.log("\t" + results[i].id.cyan.bold);
			for(var j = 0; j < results[i].innerTests.length; j++)
			{
				for(var k = 0; k < results[i].innerTests[j].title.length; k++)
				{
					if(results[i].innerTests[j].status[k] == "passed")
					{
						var successOutput = '\u2713'.green + "\t"; // Green check mark
						successOutput += results[i].innerTests[j].id + ": " + results[i].innerTests[j].title[k] + " "; // Category title and test title.
						if(results[i].innerTests[j].speed[k] != "-1") successOutput += "(" + results[i].innerTests[j].speed[k] + ")"; // Speed output
						console.log(successOutput);
					}
					else
					{
						var failureOutput = '\u2717'.red + "\t"; // Red X mark
						failureOutput += results[i].innerTests[j].id + ": " + results[i].innerTests[j].title[k] + " "; // Category title and test title.
						if(results[i].innerTests[j].speed[k] != "-1") failureOutput += "(" + results[i].innerTests[j].speed[k] + ")"; // Speed output
						failureOutput += "\n\t\t" + results[i].innerTests[j].errorMsg[k].red; // Error message
						console.log(failureOutput);
					}
				}
			}
		}
		else
		{
			for(var k = 0; k < results[i].title.length; k++)
			{
				if(results[i].status[k] == "passed")
				{
					var successOutput = '\u2713'.green + "\t"; // Green check mark
					successOutput += results[i].id + ": " + results[i].title[k] + " "; // Category title and test title.
					if(results[i].speed[k] != "-1") successOutput += "(" + results[i].speed[k] + ")"; // Speed output
					console.log(successOutput);
				}
				else
				{
					var failureOutput = '\u2717'.red + "\t"; // Red X mark
					failureOutput += results[i].id + ": " + results[i].title[k] + " "; // Category title and test title.
					if(results[i].speed[k] != "-1") failureOutput += "(" + results[i].speed[k] + ")"; // Speed output
					failureOutput += "\n\t\t" + results[i].errorMsg[k].red; // Error message
					console.log(failureOutput);
				}
			}
		}
	}
}