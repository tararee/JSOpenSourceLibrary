
// function declaration
function square( number ) {
	return number * number;
}

// function expression
//this is more common
				//Anonymous function
var square = function( number ) {
	return number * number;
}; // << notice this needs a
//semicolon because it is a variable, not
//just a function (like above)

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
//factorial takes any number and multiplies itself
//BY itself until it gets down to 0.
//!5= 5*4*3*2*1=120
//NONONONO
//so I guess that the identifier is the function?
factorial( 11 );

/*----------- Hoisting ----------------*/

// this works with function declarations..
var result = square( 10 );

function square( number ) {
	return number * number;
}

// Javascript engines parse this as..
function square( number ) {
	return number * number;
}
var result = squair( 11 );

// function expressions don't behave the same way
var result = squair( 10 ); // error!

var squair = function( number ) {
	return number * number;
};
//Hoisting just hoists FUNCTION DECLARATIONS up, makes
//it not read linearly
//It does this automatically, so be careful.
//It does not hoist variables, or even function
//expressions, which are just variables
//with functions in them.


/*--------- Parameters -------------*/

// you can pass any number of parameters without error
// they are stored in an 'array-like' structure called 'arguments'
// function.length is the 'arity' (Number of arguments expected)

function echo( value ) {
	return value;
}

console.log( echo( 'help' ) ); // help
console.log( echo( 'help', 42 ) ); // help
console.log( echo({ firstName: "Tara" lastName: 
"Miller"}))
console.log( echo.length ); // 1 - arity

var echo = function() {
	return arguments[ 0 ];
}
console.log(echo2 ( "howdy" ) );
};
//argument is an array-like object that 
//comes in to every function


console.log( echo('yo' ) ); // yo
console.log( echo( 'yo', 42 ) ); // yo
console.log( echo.length ); // 0 - arity

// Good uses for arguments object
function sum() {
	var result = 0,
		i = 0,
		len = arguments.length;

	while ( i < len ) {
		result += arguments[i];
		i++;
	}

	return result;
}

sum(1,2); // 3
sum(2,3,4,5,6,100, 4123); //4243


/*------------- Overloads ----------- */

function echo( value ) {
	return value;
}

function echo() {
	return "default text";
}

echo("Hello!"); // default text

/// better handling

function echo( value ) {

	if ( arguments.length === 0 ) {
		value = "default text";
	}

	return value;
}

