var expect = chai.expect;
var should = chai.should();

describe('#Compare Numbers', function()
{
	it('1 should equal 1', function()
	{
		expect(2).to.equal(1);
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
		it("First Name returns a string", function()
		{
			expect(getFirstName("Bob")).to.be.a('string');
		});
	});
});


var sendOutcomeBack = function()
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
			masterTestObject.tests.push( {id: (a.substr(1))} );
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
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests.push( {id: (a.substr(1))} );
				}
				else
				{
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests = [];
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests.push( {id: (a.substr(1))} );
				}
				numOfInnerTests--;
			}
			else
			{
				masterTestObject.tests.push( {id: (a.substr(1))} );
			}
			var ul = res.getElementsByTagName("li");
			$.each(ul, function(index, li) {
				var h2 = li.getElementsByTagName("h2")[0].innerHTML;
				h2 = h2.substr(0, h2.indexOf('<a'));
				if(firstLevel)
				{
					masterTestObject.tests[(masterTestObject.tests).length-1].title = h2;
				}
				else
				{
					var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
					masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].title = h2;
				}
				// TODO: Capture the duration span contents, too.
				var pre = li.getElementsByTagName("pre");
				var isError = false;
				$.each(pre, function(index, preContent)
				{
					if($(preContent).hasClass('error'))
					{
						if(firstLevel)
						{
							masterTestObject.tests[(masterTestObject.tests).length-1].status = "failed";
							var content = (preContent.innerHTML).replace('\n', '');
							var editedContent = content.substr(0, content.indexOf(' at Context')) + content.substr(content.lastIndexOf(';')+1);
							masterTestObject.tests[(masterTestObject.tests).length-1].errorMsg = editedContent;
							isError = true;
						}
						else
						{
							var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].status = "failed";
							var content = (preContent.innerHTML).replace('\n', '');
							var editedContent = content.substr(0, content.indexOf(' at Context')) + content.substr(content.lastIndexOf(';')+1);
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].errorMsg = editedContent;
							isError = true;
						}
					}
					else if(isError)
					{
						isError = false;
					}
					else
					{
						if(firstLevel)
						{
							masterTestObject.tests[(masterTestObject.tests).length-1].status = "passed";
						}
						else
						{
							var len = (masterTestObject.tests[(masterTestObject.tests).length-1].innerTests).length;
							masterTestObject.tests[(masterTestObject.tests).length-1].innerTests[len-1].status = "passed";
						}
					}
				});
			});
		}
	});
	masterTestObject = encodeURIComponent(JSON.stringify(masterTestObject));
	console.log(masterTestObject);
	location.href = "localhost:3000/" + masterTestObject;
}