//Functions, they make things happen.
//They execute tasks when something "calls" them.
//They're mini-programs!
//Let's make one that creates an alert saying "Woo!"
//First you write "function" and then name it, so
//let's name it sayWoo because Javascript= camel casing.
//We'll use {curly brackets} and inside of those we'll
//put the code that we want to run when we call the function.

function sayWoo(){
	console.log("Woo!");
}
	sayWoo();

//(note to self: alert does not run in
//Sublime with jshint enabled, so we'll
//console.log it from here on out)


//Function with parameters. Parameters are defined with parentheses. 
//Here we are passing names of my favorite foods into the parameters.
//So x becomes ceviche, then Tom Ka Gai, then bibimbap,
//each time it calls the "food" function.
function food(x){
	console.log ("My favorite food is " + x + ".");
}
food("ceviche");
food("Tom Ka Gai");
food("bibimbap");

//here's a function with two parameters:
function add(x , y){
	console.log(x + y);
}
add(7, 10);
add(9, 20);
add(12, 50);

function multiply(a,b){
	console.log(a * b);
}
multiply(5, 10);
multiply(1, 15);
multiply(2, 4);

function divide(a,b){
	console.log(a * b);
}
divide(50, 10);
divide(100, 15);
divide(22, 4);

//Let's practice with some different variables 
function addTwoNumbers(firstNum, secondNum){
	console.log(firstNum + secondNum);
}
addTwoNumbers(1,2);

//Integers are boring, but I am interesting, so let's make
//me a function.
function printFullName(firstName, lastName) {
	console.log(firstName + " " + lastName);
}
printFullName("Tara", "Miller");

// Here are two ways of using functions;
// One is the way I did it before I understood how to pass 
// information into my parameters

//fun easy way
function printOneHundred(){
	console.log(100);
}
	printOneHundred();

//boring, slightly less easy way
var tarasNumber = 100;
function printTarasNumberPlz(){
	console.log(tarasNumber);
 }
printTarasNumberPlz();

//Now that we have determined that I am the best and that I understand
//how to pass info into a function, let's pass info into a parameter string and then
//concatenate it.

function emojiStatement(givenName, maidenName, oneHundredemoji){
	console.log("Hello, my name is " + givenName + " " + maidenName + " and I am the human embodiment of the " + tarasNumber + " emoji.");
}

emojiStatement("Tara", "Miller", 100);

//Let's write a function that allows us to add 
// all of the costs for my friend Rachel's costs to look
//totally bangin' on her wedding day. 
// It's going to have a bunch of parameters, because she
//is high maintenance.

function totalCosts(makeup, nails, dress, hair, jewelry){
	console.log(makeup + nails + dress + hair + jewelry);
}
totalCosts(300, 80, 5000, 250, 600);

//RETURNS!!
// A function immediately stops at the point where return is called.
    function masterArtist(first, last)
         {
            var full;
            full = first + last;
            return full;
         }
         
         function secondFunction()
         {
            var result;
            result = masterArtist("Thomas", "Kincaide");
            console.log (result );
         }

function greeting(){
	return("Hey");
}
function neighbor(){
	return("Bob");
}
function weather(){
	return("sunny");
}
var interaction = greeting() + ", " + neighbor() + "! " +
"It sure is " + weather() + ".";

console.log(interaction);

//Here's a function that returns my pet's names and breeds.
function petNameAndBreed(name, breed){
	var petDetails = name + ", " + breed;
	console.log(petDetails);
	return petDetails;
}
petNameAndBreed("Vishnu", "Dalmatian");
petNameAndBreed("Lucille", "Labrador retriever");

//In summary:
function theBest(name){
	console.log(name + " is simply the best.");
}
theBest("Tara Ree Miller");

