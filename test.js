//array of names that start with a j
var array = ['jim', 'jack', 'john', 'jake', 'jordan'];

//creating a function that will randomly pick a name from the array
var pickName = function (name) {
	//gnerate a random number between 0-4 (if i used ceil it would be between 1-4)
	var arrayNumber = Math.floor(Math.random() * 5);
	//check to see if number is logging
	console.log(arrayNumber);
	//create a name varriable that uses the array and random number to gereante a name and store it in the name variable
	var name = array[arrayNumber];
	//check to see if the name generated
	console.log(name);
};

//call the function
pickName();
