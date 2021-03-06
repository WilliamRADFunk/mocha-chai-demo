function getFirstName(fname)
{
	if( /^[a-z]+$/i.test(fname) ) return fname;
	else return (-1);
}
function getLastName()
{
	var lname = document.getElementById("lname").value;
	if( /^[a-z]+$/i.test(lname) ) return lname;
	else return -1;
}
function getEmail()
{
	var email = document.getElementById("email").value;
	if( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|io|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email) ) return email;
	else return -1;
}
function getPhone()
{
	var phone = document.getElementById("tel").value;
	if( /\d\d\d\d\d\d\d\d\d\d/.test(phone) ) return phone.toString();
	else return -1;
}
function getFavNum()
{
	var favNum = document.getElementById("favNum").value;
	if( /^\d+$/.test(favNum) ) return favNum.toString();
	else return null;
}
function getPassword()
{
	var pass = document.getElementById("pass").value;
	if( /^[A-Za-z0-9\s\.\&\-\!\_\@]+$/.test(pass) && pass.length >= 7 ) return pass;
	else return -1;
}
function submitForm()
{
	var fname = getFirstName("Bill");
	var lname = getLastName();
	var email = getEmail();
	var phone = getPhone();
	var favNum = getFavNum();
	var pass = getPassword();

	if(fname == -1 || lname == -1 || email == -1 || phone == -1 || favNum == null || pass == -1) return false;
	else return true;
}
function isEven(num)
{
  if (num%2 !== 0) return false;
  return true;
}
var rgbToHex = function(red, green, blue)
{
	var redHex   = red.toString(16);
	var greenHex = green.toString(16);
	var blueHex  = blue.toString(16);

	return pad(redHex) + pad(greenHex) + pad(blueHex);
};
function pad(hex)
{
	return (hex.length === 1 ? "0" + hex : hex);
}
var hexToRgb = function(hex)
{
	var red   = parseInt(hex.substring(0, 2), 16);
	var green = parseInt(hex.substring(2, 4), 16);
	var blue  = parseInt(hex.substring(4, 6), 16);

	return [red, green, blue];
};