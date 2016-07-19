// If/then statements


//Conditionals! They're if/then statements!
//Here's an example using comparison operators and integers
var age = 0;
if(age >= 25){
	console.log("You can rent a car!");
} else{
	console.log("You can buy a Greyhound ticket!");
}

//Conditionals using Booleans
var imTired = true;
var imDying = false;
//1
if(imTired) {
	console.log("I need a nap.");
}
//a different way of writing the above:

if (imTired === true) {
	console.log("I need a triple-shot latte.");
}

//usingcomparison operators
if (imTired && imDying) {
	console.log("Goodbye, Cruel World.");
}

if (imTired || imDying) {
	console.log("I just need to close my eyes...");
}

//
if(!imTired) {
	console.log("I have miracuously graduated from Eleven Fifty Academy.");
}

//Here's a simple conditional using Booleans:
var itPutsTheLotionOnItsSkin = true;
var itPutsTheLotionInTheBasket = false;

if (itPutsTheLotionOnItsSkin){
	console.log("It does this whenever it's told.");
}	else {
	console.log("It gets the hose again.");
}

if (itPutsTheLotionOnItsSkin && itPutsTheLotionInTheBasket){
	console.log(null);
}	else{
	console.log("It gets the hose again.");
}


//Using integers, variables, and Booleans in conditionals
var speedLimit = 55;
var currentSpeed = 75;
var difference = currentSpeed - speedLimit;

console.log("I am driving " + currentSpeed + " in a " + speedLimit + " zone.");

if ((difference) > 15) {
		console.log("Good evening, Officer.");
	} else {
		console.log("What a lovely evening.");
}
