var expect = chai.expect;
var should = chai.should();

describe('@The If-This-Fails-Then-Up-Is-Down-And-Down-Is-Up Mocha Works Tests', function()
{
	describe('#Relax. It\'s OK Tests', function()
	{
		it('\'everything\' should be ok', function()
		{
			expect('everything').to.be.ok;
		});
		it('\'1\' should be ok', function()
		{
			expect(1).to.be.ok;
		});
		it('\'false\' should NOT be ok', function()
		{
			expect(false).to.not.be.ok;
		});
		it('\'undefined\' should NOT be ok', function()
		{
			expect(undefined).to.not.be.ok;
		});
		it('\'null\' should NOT be ok', function()
		{
			expect(null).to.not.be.ok;
		});
	});
	describe('#True be told', function()
	{
		it('True is true', function()
		{
			expect(true).to.be.true;
		});
		it('\'1\' is the loneliest number...and it\'s also true', function()
		{
			expect(1).to.not.be.true;
		});
	});
	describe('#Undefined Tests', function()
	{
		it('Undefined should be undefined', function()
		{
			expect(undefined).to.be.undefined;
		});
		it('Null should not be undefined', function()
		{
			expect(null).to.not.be.undefined;
		});
	});
	describe('#Null Tests', function()
	{
		it('Null should be null', function()
		{
			expect(null).to.be.null;
		});
		it('Undefined should not be null', function()
		{
			expect(undefined).to.not.be.null;
		});
	});
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
		it("getFirstName('Bob') returns a string when given a string", function()
		{
			expect(getFirstName("Bob")).to.be.a('string');
		});
		it("getFirstName(1) returns a -1 when given a number", function()
		{
			expect(getFirstName(1)).to.equal(-1);
		});
		it("getFirstName('') returns a -1 when empty", function()
		{
			expect(getFirstName("")).to.equal(-1);
		});
		it("getFirstName('-') returns a -1 when containing a '-' character", function()
		{
			expect(getFirstName("-")).to.equal(-1);
		});
		it("getFirstName('&') returns a -1 when containing a '&' character", function()
		{
			expect(getFirstName("&")).to.equal(-1);
		});
		it("getFirstName('@') returns a -1 when containing a '@' character", function()
		{
			expect(getFirstName("@")).to.equal(-1);
		});
		it("getFirstName('<') returns a -1 when containing a '<' character", function()
		{
			expect(getFirstName("<")).to.equal(-1);
		});
		it("getFirstName('>') returns a -1 when containing a '>' character", function()
		{
			expect(getFirstName(">")).to.equal(-1);
		});
		it("getFirstName('\\') returns a -1 when containing a '\\' character", function()
		{
			expect(getFirstName("\\")).to.equal(-1);
		});
		it("getFirstName('/') returns a -1 when containing a '/' character", function()
		{
			expect(getFirstName("/")).to.equal(-1);
		});
	});

	describe("#Last Name is a string without spaces or special character", function()
	{
		it("getLastName() returns a string when given a string", function()
		{
			document.getElementById("lname").value = "Dillan";
			console.log(document.getElementById("lname").value);
			expect(getLastName()).to.be.a('string');
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when given a number", function()
		{
			document.getElementById("lname").value = 1;
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when empty", function()
		{
			document.getElementById("lname").value = "";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '-' character", function()
		{
			document.getElementById("lname").value = "-";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '&' character", function()
		{
			document.getElementById("lname").value = "&";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '@' character", function()
		{
			document.getElementById("lname").value = "@";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '<' character", function()
		{
			document.getElementById("lname").value = "<";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '>' character", function()
		{
			document.getElementById("lname").value = ">";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '\\' character", function()
		{
			document.getElementById("lname").value = "\\";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
		it("getLastName() returns a -1 when containing a '/' character", function()
		{
			document.getElementById("lname").value = "/";
			expect(getLastName()).to.equal(-1);
			document.getElementById("lname").value = "";
		});
	});

	describe("#Email is in valid email format", function()
	{
		it("getEmail() returns an email string when given a non-email string ~~~ 'myEmail@validEmails.com'", function()
		{
			document.getElementById("email").value = "myEmail@validEmails.com";
			expect(getEmail()).to.be.a('string');
			document.getElementById("email").value = '';
		});
		it("getEmail() returns an -1 when given a non-email string ~~~ 'myEmail'", function()
		{
			document.getElementById("email").value = "myEmail";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when given a number", function()
		{
			document.getElementById("email").value = 1;
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when empty", function()
		{
			document.getElementById("email").value = "";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when domain extension is fake ~~~ 'myEmail@validEmails.comm", function()
		{
			document.getElementById("email").value = "myEmail@validEmails.comm";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when missing a '\@' character ~~~ 'Abc.example.com'", function()
		{
			document.getElementById("email").value = "Abc.example.com";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when containing more than one '\@' character ~~~ 'A@b@c@example.com'", function()
		{
			document.getElementById("email").value = "A@b@c@example.com";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when containing special characters in this local part ~~~ 'a\"b(c)d,e:f;g<h>i[j\k]l@example.com'", function()
		{
			document.getElementById("email").value = 'a"b(c)d,e:f;g<h>i[j\k]l@example.com';
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when containing quoted strings ~~~ 'just\"not\"right@example.com'", function()
		{
			document.getElementById("email").value = 'just"not"right@example.com';
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when containing double dot before the \@ ~~~ 'john..doe@example.com'", function()
		{
			document.getElementById("email").value = "john..doe@example.com";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it("getEmail() returns a -1 when containing double dot after the \@ ~~~ 'john.doe@example..com'", function()
		{
			document.getElementById("email").value = "john.doe@example..com";
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it('getEmail() returns a -1 when containing spaces, quotes, and backslashes without preceded by backslash or contained in double quotes ~~~ \'this is"not\allowed@example.com\'', function()
		{
			document.getElementById("email").value = 'this is"not\allowed@example.com';
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
		it('getEmail() returns a -1 when containing spaces, quotes, and backslashes, though preceded by backslash, aren\'t contained in double quotes ~~~ \'this\ still\"not\\allowed@example.com\'', function()
		{
			document.getElementById("email").value = 'this\ still\"not\\allowed@example.com';
			expect(getEmail()).to.equal(-1);
			document.getElementById("email").value = '';
		});
	});

	describe("#Phone is in valid phone format format", function()
	{
		it("getPhone() returns a number when given a proper phone number ~~~ 4078235555", function()
		{
			document.getElementById("tel").value = 4078235555;
			expect( parseInt(getPhone()) ).not.to.be.NaN;
			document.getElementById("tel").value = "";
		});
		it("getPhone() returns a ten-digit number when given a proper phone number ~~~ 4078235555", function()
		{
			document.getElementById("tel").value = 4078235555;
			expect(getPhone().length == 10).to.be.true;
			document.getElementById("tel").value = "";
		});
		it("getPhone() returns a -1 when given a number with too few digits ~~~ 407823555", function()
		{
			document.getElementById("tel").value = 407823555;
			expect(getPhone().length == 10).to.be.false;
			document.getElementById("tel").value = "";
		});
		it("getPhone() returns a -1 when given a number with too many digits ~~~ 40782355550", function()
		{
			document.getElementById("tel").value = 40782355550;
			expect(getPhone().length == 10).to.be.false;
			document.getElementById("tel").value = "";
		});
		it("getPhone() returns a -1 when given a number contains non-numbers ~~~ 407-8235555 ~~~ (407)8235555 ~~~ 407823555x", function()
		{
			document.getElementById("tel").value = "407-8235555";
			expect(getPhone()).to.equal(-1);
			document.getElementById("tel").value = "";
			document.getElementById("tel").value = "(407)8235555";
			expect(getPhone()).to.equal(-1);
			document.getElementById("tel").value = "";
			document.getElementById("tel").value = "407823555x";
			expect(getPhone()).to.equal(-1);
			document.getElementById("tel").value = "";
		});
	});

	describe("#Favorite Number is a number", function()
	{
		it("getFavNum() returns a number when given a number ~~~ 72", function()
		{
			document.getElementById("favNum").value = 72;
			expect( parseInt(getFavNum()) ).not.to.be.NaN;
			document.getElementById("favNum").value = "";
		});
		it("getFavNum() returns an empty string when given a number ~~~ 7r", function()
		{
			document.getElementById("favNum").value = "7r";
			expect( getFavNum() ).to.equal(null);
			document.getElementById("favNum").value = "";
		});
	});

	describe("#Password is valid", function()
	{
		it("getPassword() returns a string when given a valid password ~~~ myPassword72!", function()
		{
			document.getElementById("pass").value = "myPassword72!";
			expect(getPassword()).to.be.a('string');
			expect(getPassword().length >= 7).to.be.true;
			document.getElementById("pass").value = "";
		});
		it("getPassword() returns an -1 when given a password too short ~~~ myPass", function()
		{
			document.getElementById("pass").value = "myPass";
			expect(getPassword()).to.equal(-1);
			document.getElementById("pass").value = "";
		});
		it("getPassword() returns an -1 when given a password with invalid characters ~~~ myPassword72+", function()
		{
			document.getElementById("pass").value = "myPassword72+";
			expect(getPassword()).to.equal(-1);
			document.getElementById("pass").value = "";
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