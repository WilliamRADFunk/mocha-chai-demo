var colors = require('colors-plus');
var request = require("request");
var express = require("express");
var jsdom = require('mocha-jsdom');
var app = express();
var open = require('open');
var bodyParser = require('body-parser');
var expect = require('chai').expect;
var exec = require('exec');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

open('http://localhost:3000/');
// viewed at http://localhost:3000
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});
app.get('/realIndex', function(req, res)
{
	res.sendFile(__dirname.substr(0, __dirname.length-5) + '/index.html');
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
	console.log("\n\n################################################################################\n" +
				colors.warning("Non-Node Tests Starting...") + "\n" +
				"################################################################################\n\n");
	var successCount = 0;
	var failureCount = 0;
	var totalTime = 0;
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
						successCount++;
						var successOutput = results[i].innerTests[j].id + ": " + results[i].innerTests[j].title[k] + " "; // Category title and test title.
						if(results[i].innerTests[j].speed[k] != "-1")
						{
							totalTime += parseInt((results[i].innerTests[j].speed[k]).slice(0, -2));
							successOutput += "(" + results[i].innerTests[j].speed[k] + ")"; // Speed output
						}
						console.log(colors.success(successOutput));
					}
					else
					{
						failureCount++;
						var failureOutput = results[i].innerTests[j].id + ": " + results[i].innerTests[j].title[k] + " "; // Category title and test title.
						if(results[i].innerTests[j].speed[k] != "-1")
						{
							totalTime += parseInt((results[i].innerTests[j].speed[k]).slice(0, -2));
							failureOutput += "(" + results[i].innerTests[j].speed[k] + ")"; // Speed output
						}
						failureOutput += "\n\t\t" + results[i].innerTests[j].errorMsg[k].red; // Error message
						console.log(colors.failure(failureOutput));
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
					successCount++;
					successOutput += results[i].id + ": " + results[i].title[k] + " "; // Category title and test title.
					if(results[i].speed[k] != "-1")
					{
						totalTime += parseInt((results[i].speed[k]).slice(0, -2));
						successOutput += "(" + results[i].speed[k] + ")"; // Speed output
					}
					console.log(colors.success(successOutput));
				}
				else
				{
					failureCount++;
					failureOutput += results[i].id + ": " + results[i].title[k] + " "; // Category title and test title.
					if(results[i].speed[k] != "-1")
					{
						totalTime += parseInt((results[i].speed[k]).slice(0, -2));
						failureOutput += "(" + results[i].speed[k] + ")"; // Speed output
					}
					failureOutput += "\n\t\t" + results[i].errorMsg[k].red; // Error message
					console.log(colors.failure(failureOutput));
				}
			}
		}
	}
	console.log("\n\nTests passed: " + successCount + "\nTests failed: " + failureCount + "\nTotal Time: " + totalTime + "ms\n\n");
	console.log("################################################################################\n" +
				colors.warning("Node Tests Starting...") + "\n" +
				"################################################################################\n\n");
	exec('mocha test/functions-exports', function(err, out, code)
	{
		if (err instanceof Error) throw err;
		process.stderr.write(err);
		process.stdout.write(out);
		process.exit(code);
	});
}