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