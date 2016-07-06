var expect = chai.expect;
var should = chai.should();

describe('#Compare Numbers', function()
{
	it('1 should equal 1', function()
	{
		expect(1).to.equal(1);
	});
	it('2 should be greater than 1', function()
	{
		expect(2).to.be.greaterThan(1);
	});
});
describe('#Is Even Tests', function()
{
	it('Should always return a boolean', function()
	{
		expect(isEven(2)).to.be.a('boolean');
	});
	it('Calling isEven(76) should return true.', function()
	{
		expect(isEven(76)).to.be.true;
	});
	it('Calling isEven(77) should return false.', function()
	{
		expect(isEven(77)).to.be.false;
	});
});
describe("@Color Code Converter", function()
{
	describe("#RGB to Hex conversion", function()
	{
		it("converts the basic colors", function()
		{
			var redHex   = rgbToHex(255, 0, 0);
			var greenHex = rgbToHex(0, 255, 0);
			var blueHex  = rgbToHex(0, 0, 255);

			expect(redHex).to.equal("ff0000");
			expect(greenHex).to.equal("00ff00");
			expect(blueHex).to.equal("0000ff");
		});
	});

	describe("#Hex to RGB conversion", function()
	{
		it("converts the basic colors", function()
		{
			var red   = hexToRgb("ff0000");
			var green = hexToRgb("00ff00");
			var blue  = hexToRgb("0000ff");

			expect(red).to.deep.equal([255, 0, 0]);
			expect(green).to.deep.equal([0, 255, 0]);
			expect(blue).to.deep.equal([0, 0, 255]);
		});
	});
});
describe("@Input validation Functions", function()
{
	describe("#First Name is a string without spaces or special character", function()
	{
		it("First Name returns a string when given a string", function()
		{
			expect(getFirstName("Bob")).to.be.a('string');
		});
		it("First Name returns a -1 when given a number", function()
		{
			expect(getFirstName(1)).to.equal(-1);
		});
		it("First Name returns a -1 when empty", function()
		{
			expect(getFirstName("")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '-' character", function()
		{
			expect(getFirstName("-")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\&' character", function()
		{
			expect(getFirstName("&")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\@' character", function()
		{
			expect(getFirstName("@")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\<' character", function()
		{
			expect(getFirstName("<")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\>' character", function()
		{
			expect(getFirstName(">")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\\' character", function()
		{
			expect(getFirstName("\\")).to.equal(-1);
		});
		it("First Name returns a -1 when containing a '\/' character", function()
		{
			expect(getFirstName("/")).to.equal(-1);
		});
	});

	describe("#Last Name is a string without spaces or special character", function()
	{
		it("Last Name returns a string when given a string", function()
		{
			document.getElementById("lname").value = "Dillan";
			console.log(document.getElementById("lname").value);
			expect(getLastName()).to.be.a('string');
		});
		it("Last Name returns a -1 when given a number", function()
		{
			document.getElementById("lname").value = 1;
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when empty", function()
		{
			document.getElementById("lname").value = "";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '-' character", function()
		{
			document.getElementById("lname").value = "-";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\&' character", function()
		{
			document.getElementById("lname").value = "&";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\@' character", function()
		{
			document.getElementById("lname").value = "@";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\<' character", function()
		{
			document.getElementById("lname").value = "<";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\>' character", function()
		{
			document.getElementById("lname").value = ">";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\\' character", function()
		{
			document.getElementById("lname").value = "\\";
			expect(getLastName()).to.equal(-1);
		});
		it("Last Name returns a -1 when containing a '\/' character", function()
		{
			document.getElementById("lname").value = "/";
			expect(getLastName()).to.equal(-1);
		});
	});

	describe("#Email is in valid email format", function()
	{
		it("Email returns an email string when given a non-email string --> 'myEmail@validEmails.com'", function()
		{
			document.getElementById("email").value = "myEmail@validEmails.com";
			expect(getEmail()).to.be.a('string');
		});
		it("Email returns an -1 when given a non-email string --> 'myEmail'", function()
		{
			document.getElementById("email").value = "myEmail";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when given a number", function()
		{
			document.getElementById("email").value = 1;
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when empty", function()
		{
			document.getElementById("email").value = "";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when domain extension is fake --> 'myEmail@validEmails.comm", function()
		{
			document.getElementById("email").value = "myEmail@validEmails.comm";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when missing a '\@' character --> 'Abc.example.com'", function()
		{
			document.getElementById("email").value = "Abc.example.com";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when containing more than one '\@' character --> 'A@b@c@example.com'", function()
		{
			document.getElementById("email").value = "A@b@c@example.com";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when containing special characters in this local part --> 'a\"b(c)d,e:f;g<h>i[j\k]l@example.com'", function()
		{
			document.getElementById("email").value = 'a"b(c)d,e:f;g<h>i[j\k]l@example.com';
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when containing quoted strings --> 'just\"not\"right@example.com'", function()
		{
			document.getElementById("email").value = 'just"not"right@example.com';
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when containing double dot before the \@ --> 'john..doe@example.com'", function()
		{
			document.getElementById("email").value = "john..doe@example.com";
			expect(getEmail()).to.equal(-1);
		});
		it("Email returns a -1 when containing double dot after the \@ --> 'john.doe@example..com'", function()
		{
			document.getElementById("email").value = "john.doe@example..com";
			expect(getEmail()).to.equal(-1);
		});
		it('Email returns a -1 when containing spaces, quotes, and backslashes without preceded by backslash or contained in double quotes --> \'this is"not\allowed@example.com\'', function()
		{
			document.getElementById("email").value = 'this is"not\allowed@example.com';
			expect(getEmail()).to.equal(-1);
		});
		it('Email returns a -1 when containing spaces, quotes, and backslashes, though preceded by backslash, aren\'t contained in double quotes --> \'this\ still\"not\\allowed@example.com\'', function()
		{
			document.getElementById("email").value = 'this\ still\"not\\allowed@example.com';
			expect(getEmail()).to.equal(-1);
		});
	});
});



// Sets up and sends the ajax post.
function ajax(url, data)
{
	$.post(url, data, function(e){
		if(e === 'transmission received')
		{
			console.log("transmission successfully sent");
		}
	});
}
// Grabs relevant content from the DOM, filters it, puts it in JSON format, and send back to the Express server.
var sendOutcomeBack = function(cb)
{
	var masterTestIndex = [];
	var masterTestObject = { tests: masterTestIndex };
	var numOfInnerTests = 0;
	$('#mocha-report li.suite').each(function(index, res) {
		// Getting the title of the test group/test
		var a = (res.getElementsByTagName("h1")[0]).getElementsByTagName("a")[0].text;
		// Separating the difference between an outer category from inner.
		if (a.charAt(0) === '@')
		{
			numOfInnerTests = res.getElementsByTagName("h1").length -1;
			masterTestObject.tests.push( { id: (a.substr(1)), title: [], speed: [], status: [], errorMsg: [] } );
		}
		else
		{
			// If outerloop was there, add these to its subkeys. Otherwise, treat it as level 1.
			var firstLevel = true;
			if(numOfInnerTests > 0)
			{
				firstLevel = false;
				if(masterTestObject.tests[(masterTestObject.tests).length-1].innerTests != undefined)
				{
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests.push( { id: (a.substr(1)), title: [], speed: [], status: [], errorMsg: [] } );
				}
				else
				{
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests = [];
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests.push( { id: (a.substr(1)), title: [], speed: [], status: [], errorMsg: [] } );
				}
				numOfInnerTests--;
			}
			else { masterTestObject.tests.push( { id: (a.substr(1)), title: [], speed: [], status: [], errorMsg: [] } ) };
			var ul = res.getElementsByTagName("li");
			$.each(ul, function(index, li) {
				// Gets the title of the test, originally buried in li > h2 > a
				var h2 = li.getElementsByTagName("h2")[0].innerHTML;
				h2 = h2.substr(0, h2.indexOf('<a'));
				// Find the various indices to factor out span tags from speed if present.
				var h2Left = h2.substr(0, h2.indexOf('<span class="duration">'));
				var h2Middle = " (duration: ";
				var durationLeftIndex = h2.indexOf('<span class="duration">')+23;
				var durationRightIndex = h2.lastIndexOf('</span>');
				var speed = "-1";
				// If speed was displayed, factor out the span tags.
				if(durationRightIndex > -1)
				{
					speed = h2.substring(durationLeftIndex, durationRightIndex);
					h2 = h2Left;
				}
				// Places new test title in first or send level, depending on originally displayed level.
				if(firstLevel)
				{
					masterTestObject.tests[(masterTestObject.tests).length-1].title.push(h2);
					masterTestObject.tests[(masterTestObject.tests).length-1].speed.push(speed);
				}
				else
				{
					var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].title.push(h2);
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].speed.push(speed);
				}
				// Gets the pass/fail details of each test
				var pre = li.getElementsByTagName("pre");
				var isError = false;
				$.each(pre, function(index, preContent)
				{
					if($(preContent).hasClass('error'))
					{
						if(firstLevel)
						{
							masterTestObject.tests[(masterTestObject.tests).length-1].status.push("failed");
							var content = (preContent.innerHTML).replace('\n', '');
							var editedContent = content.substr(0, content.indexOf(' at Context')) + content.substr(content.lastIndexOf(';')+1);
							masterTestObject.tests[(masterTestObject.tests).length-1].errorMsg.push(editedContent);
						}
						else
						{
							var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].status.push("failed");
							var content = (preContent.innerHTML).replace('\n', '');
							var editedContent = content.substr(0, content.indexOf(' at Context')) + content.substr(content.lastIndexOf(';')+1);
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].errorMsg.push(editedContent);
						}
						isError = true;
					}
					else if(isError) isError = false;
					else
					{
						if(firstLevel)
						{
							masterTestObject.tests[(masterTestObject.tests).length-1].status.push("passed");
							masterTestObject.tests[(masterTestObject.tests).length-1].errorMsg.push("");
						}
						else
						{
							var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].status.push("passed");
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].errorMsg.push("");
						}
					}
				});
			});
		}
	});
	// Sends the compile data back to the server for use by node.
	ajax("http://localhost:3000/testResults", masterTestObject);
	// Closes browser window
	cb();
}