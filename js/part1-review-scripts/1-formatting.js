/* this file is just some formatting preferences
* for maintaining more readable JavaScript code */

/* TOOLS */
// USE jshint or eslint!
//formatting and style guides
//https://contribute.jquery.org/style-guide/js/
//https://github.com/rwaldron/idiomatic.js/
//For style codes, they vary, but basically don't
//mix styles

//

var condition = true;

var doSomething = function() {
	console.log( "I did it!" );
};


/*  Whitespace */

// prefer this
if ( condition ) {
	doSomething();
}
//

// not this
if(condition) doSomething();
// like you have been anyway, so...cool

/* variable declarations */

// use either one var per scope (function)
// or one var per variable (easier to reorder lines)
// vars always at the top of a function.

function foo() {
	var one = 1,
		two,
		three;
}

//or 
function foo() {
	var one = 1;
	var two;
	var three;
}

// same goes for let
function foo() {
	let foo;
	if ( condition ) {
		let bar = "";
		doSomething();
	}
}