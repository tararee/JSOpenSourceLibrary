/* This is the review of the basics, most likely repeat much of the 
* material from EFA fundamentals
*/
/* TYPES */
/* primative
Boolean
Number
String
Null
Undefined
*/
/* Boolean */
var found = true;

// numbers
var age = 33;
var decimal = 3.31;

// strings
var string = "55555";

// Objects 
var object = new Object();
var object2 = object;
object = null;

var object = new Object();
object2 = object;
object.myCustomProperty = "RAD";

console.log(object2.myCustomProperty);

// Built in types
var items = new Array();
// this is a linting tool, they run through
// your code and check it against a set of rules
var now = new Date();

var error = new Error("Something has gone awry!");
// function
var func = new Function("console.log('func')");
//objects
var object= new Object();
//regex 
var re = new RegExp("\\d+");
//A way to find different elements in a string of text
//i.e. finding only alphanumeric data and extracting it
var myString ="foo bar"






// function delcaration
function square( number ) {
	return number * number;
}


// function expression
var square = function( number ) {
	return number * number;
}; // << notice this

square( 11 );

// function expression with identifier
// can call itself and is available in
// stack traces
var factorial = function factorial( number ) {
	if ( number < 2 ) {
		return 1;
	}

	return number * factorial( number -1 );
};

factorial( 11 );