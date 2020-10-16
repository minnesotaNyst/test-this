//create a var input
var input = 1; //QUESTION: Why, when input = 0, does this make it to the second log and actually log?
//create the check number function
var checkNum = function (num) {
	//QUESTION: Why give this ^^ function a parameter, can we name this anything?
	//create local var for the sum
	var sum = num + 1;
	switch (sum) {
		case 1:
			console.log('one');
		case 2:
			console.log('two');
			break;
		case 3:
			console.log('three');
			break;
	}
};

//call the function
checkNum(input); //QUESTION: Why exactly are we doing here? Calling the funtion and...?
