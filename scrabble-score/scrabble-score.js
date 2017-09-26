var scoreTable = [
	{
		partOf: "aeioulrnst",
		score: 1
	},
	{
		partOf: "dg",
		score: 2
	},
	{
		partOf: "bcmp",
		score: 3
	},
	{
		partOf: "fhvwy",
		score: 4
	},
	{
		partOf: "k",
		score: 5
	},
	{
		partOf: "jx",
		score: 8
	},
	{
		partOf: "qz",
		score: 10
	}
]
var score = function(input) {
	if (typeof input == 'string' && input) {
	Input = input.toLowerCase();
	var sum = 0;
	for (i in Input) {
		scoreTable.forEach(function (element) {
			if(element.partOf.indexOf(Input[i])!=-1){sum+=element.score}

		});
		console.log(Input[i] + " " + sum);
	}
	return sum;
	}
	else {return 0;}
}
module.exports = score;
