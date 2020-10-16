//array of names that start with a j

var arrayJ = ['jim', 'jack', 'john', 'jake', 'jordan'];
var arrayS = ['susan', 'sarah', 'sadie', 'sandy', 'samantha'];

//creating a function that will randomly pick a name from the array
var pickName = function (name) {
	var genderPrompt = window.prompt(
		'Please enter M for "Male" or F for "Female"'
	);
	//gnerate a random number between 0-4 (if i used ceil it would be between 1-4)
	var arrayNumber = Math.floor(Math.random() * 5);
	//check to see if number is logging
	console.log(arrayNumber);
	//create a name varriable that uses the array and random number to gereante a name and store it in the name variable
	if (genderPrompt === 'M') {
		var name = arrayJ[arrayNumber];
        console.log(name);
        //NOTE TO SELF/QUESTION: Left off here trying to put in a break statement to exit the loop if a value was entered correctly...
	}
	if (genderPrompt === 'F') {
		var name = arrayS[arrayNumber];
		console.log(name);
	} else {
		window.alert('Better luck next time...');
	}
	//check to see if the name generated
	console.log(name);
};

//TODO: Display a list of three random names in the console.

//call the function
pickName();
