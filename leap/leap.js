	//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
	this.input = input;
	return input;
};

Year.prototype.isLeap = function() {

var x;
/*
switch (0 == this.input%x) {
	case x=4:
		result = true;
	case x=100:
		result = false;
	case x=400:
		result = true;

*/
var result = true;

if (this.input%400 == 0) {
	result = true;
}
else if (this.input%100 == 0) {
	result = false;
}

else if (this.input%4 == 0) {
	result = true;
} else {
	result = false;
}

return result;
};

module.exports = Year;
