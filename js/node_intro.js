function Human (name, age, details) {

}
var object = new Object();


Human.prototype = {
	constructor: Human,

	showAge: function(){
	console.log("I'm this many: " + this.age);
	}

sayName: function(){
	console.log("My name is ")
}
//npm