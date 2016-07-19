/* Intro */

function Human (name, age, extraInfo) {
	this.name = name;
	this.age = age;
	this.extraInfo = extraInfo;
}

Human.prototype = {
	constructor: Human,

	showAge: function() {
		console.log( this.age );
	},

	sayName: function() {
		console.log( this.name );
	},

	showExtras: function() {
		console.log( this.extraInfo );
	}
};


var cory = new Human( "Cory Gackenheimer", "33", { 
	employer: "Zotec Partners",
	role: "Sr. Software Engineer",
	openSource: "jQuery Mobile Team Member",
	education: "Purdue University, B.S. Physics & Mathematics",
	books: [ "Node.js Recipes", "Introduction to React" ],
	efaRole: "Lead JavaScript Instructor",
	efaCourses: [ "JavaScript 201", "JavaScript 301" ]
});

cory.sayName();

// cory.showAge();

cory.showExtras();