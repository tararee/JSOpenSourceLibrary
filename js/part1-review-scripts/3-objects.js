/* objects are just containers for properties */

// three ways of creation
var foo = {}; // preferred since Object could be overwritten
var bar = new Object(); 
var baz = Object.create(null);

//so that someone can't overwrite an object
//with like Object.pwned or something
//It's basically code

// var object1 = new Object();
// var object2 = object1;

// object1.customProperty = "bazinga";
// console.log(object2.customProperty); // bazinga;

// var fooWithProps = {
// 	aProperty: true,
// 	another: "property"
// //};

// var bike = {
// 	wheels: 2,
// 	handlebars: 1,
// 	color: "teal",
// 	hasBell: true,
// 	ringBell: function() {
// 		if (bike.hasBell) 
// 			console.log("brrrring!");
// 		}
// 	};
// 		else {
// 			console.log("OH MY GOD DON'T HIT ME");
// 		}
// 	}
// 	},
// 	addBell: function(){
// 		this.hasBell=true;
// 	}
// };
// /* objects with methods */

 
// here let the students take an idea of a bike and create
// the object themselves, we'll circle back after they try on their own.

// var bike = {
// 	wheels: 2,
// 	handlebars: true,
// 	bell: false,
// 	ringBell: function() {
// 		if (bike.bell) {
// 			console.log("ring, ring");
// 		} else {
// 			console.log("I need a bell");
// 		}
// 	}
// };

// bike.ringBell(); // I need a bell
// bike.bell = true;
// bike.ringBell(); // ring, ring



/* --- this --- */
/*
 notice the above bike.bell reference inside the ringBell method
 doing it in this way tightly couples the object name to the method
 we can do better
*/

// // every scope in JS has a 'this' object that represents
// // the calling object for the function.
// var bike = {
// 	wheels: 2,
// 	handlebars: true,
// 	bell: false,
// 	ringBell: function() {
// 		if (hasBell) {
// 			console.log("ring, ring");
// 		} else {
// 			console.log("I need a bell");
// 		}
// 	}
// };

// function ringGlobalBell() {
// 	console.log(this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring, ring",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };

// var bike2 = {
// 	bellSound: "dingaling",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };

// var bellSound = "rrrrrrrrrriiiiiiiiiing!!!!";

// bike1.ringBell(); // ring ring
// bike2.ringBell(); // dingaling
// ringGlobalBell(); // rrrrrrrrriiiiiiiinngg!!!!


/* -------- call() -------- */
///we can manipulate 'this' let the students try to 
// do this on their own with some limited guidance to 
// using call or bind, or apply

function ringGlobalBell( bike ) {
	console.log( bike + ": " + this.bellSound);
}

var bike1 = {
	bellSound: "ring, ring"
};

var bike2 = {
	bellSound: "dingaling"
};

var bellSound = "rrrrrrrrriiiiiiiinngg";
//"call" accepts 2 arguments (this)
// ringGlobalBell.call(this, "global");
// ringGlobalBell.call(bike1, "bike1");
// ringGlobalBell.call(bike2, "bike2");

// /* ----- apply() ------*/
// function ringGlobalBell( bike ) {
// 	console.log( bike + ": " + this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring, ring"
// };

// var bike2 = {
// 	bellSound: "dingaling"
// };

// var bellSound = "rrrrrrrrriiiiiiiinngg";

// ringGlobalBell.apply(this, ["global"]);
// ringGlobalBell.apply(bike1, ["bike1"]);
// ringGlobalBell.apply(bike2, ["bike2"]);

//  -------- bind() ------------ 
// // added in es5

// function ringGlobalBell( bike ) {
// 	console.log( bike + ": " + this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring, ring"
// };

// var bike2 = {
// 	bellSound: "dingaling"
// };

// var ringBike1Bell = ringGlobalBell.bind(bike1);
// ringBike1Bell("bike1");

// var ringBike2Bell = ringGlobalBell.bind(bike2);
// ringBike2Bell("bike2");

// //once bound, can't change it
// bike2.ringBell = ringBike1Bell;
// bike2.ringBell("bike2");

// /* ----- constructors ----- */

// function Bike() {

// }

// var bike1 = new Bike();
// var bike2 = new Bike; /// can omit paren when no params

// console.log(bike1 instanceof Bike);
// console.log(bike2 instanceof Bike);

// console.log(bike1.constructor === Bike);

// setting properties inside of constructor

// function Bike( model ) {
// 	this.model = model;
// 	this.logModel = function() {
// 		console.log(this.model);
// 	}
// }

// var bike1 = new Bike( "Monocog" );
// var bike2 = new Bike( "Defy" );

// console.log( bike1.model );
// console.log( bike2.model );

// bike1.logModel();
// bike2.logModel();

// /* ------- prototypes ----------- */

// function Bike( model ) {
// 	this.model = model;
// }

// Bike.prototype.logModel = function() {
// 	console.log( this.model );
// };

// var bike1 = new Bike( "Monocog" );
// var bike2 = new Bike( "Defy" );

// console.log( bike1.model );
// console.log( bike2.model );

// bike1.logModel();
// bike2.logModel();

// // shared properties
// Bike.prototype.wheels = 2;

// console.log(bike1.wheels);
// console.log(bike2.wheels);
// console.log(bike1.constructor);

// /// object literal prototype

// function Bike( model ) {
// 	this.model = model;
// }

// Bike.prototype = {
// 	logModel: function() {
// 		console.log(this.model);
// 	},
// 	wheels: 2
// }

// var bike1 = new Bike("monocog");

// console.log(bike1 instanceof Bike); // true
// console.log(bike1.constructor); // Object?

// function Bike( model ) {
// 	this.model = model;
// }

// Bike.prototype = {
// 	constructor: Bike,

// 	logModel: function() {
// 		console.log(this.model);
// 	},
// 	wheels: 2
// }

// var bike1 = new Bike("monocog");

// console.log(bike1 instanceof Bike); // true
// console.log( bike1.constructor ); // Bike


