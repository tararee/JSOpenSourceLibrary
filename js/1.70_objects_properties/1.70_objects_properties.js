//objects are variables that have variables inside of them

//here's an object called var myHouse{name:"Grey Gardens", address: "418 N. Harold St.", city: "Bloomington", floors: 2, broken= true};
//Ojbect Literals with properties

var emptyObject = {};

var taraMiller = {
	//Properties
	name 			: "Tara Miller",
	age  			: 33,
	vocation		: "Artistic genius",
	speaksSpanish	: true

};

//Access the values.
console.log(taraMiller);
console.log(taraMiller.name);
console.log(taraMiller.age);
console.log(taraMiller.vocation);
console.log(taraMiller.speaksSpanish);

//don't forget that inside of functions you use
// : instead of =
var animal = {
	type : "dingo",
	habitat : "Outback",
	population  : 50000,
	ateMyBaby : true
};

var cyborg = {
	name : "Terminator",
	occupation: "assassin",
	company: "Skynet",
	fromYear: 2029,
	willBeBack: true
};

