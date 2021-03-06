
//Methods - functions inside of objects.
//When we want to add a function to the object, we can create methods.
//We also need to know about the this keyword. 
//It's pointing to itself.

var inigoMontoya = {
	name : "Inigo Montoya",
	nationality: "Spaniard",
	whatYouDid: "killed my father",
	whatYouWillDo: "die",

	//Methods
	greeting: function(){
		console.log("My name is " + this.name + ". ");
	},
	accusation: function(){
		console.log("You " + this.whatYouDid + ". ");
	},
	warning: function(){
		console.log("Prepare to " + this.whatYouWillDo + ".");
	},
	seeSixFingeredMan: function(){	//call functions inside of functions.
		this.greeting();
		this.accusation();
		this.warning();
 }
};

//Like the properties, we access the functions with the dot operator.
//When calling you need to add () at the end.
inigoMontoya.greeting();
inigoMontoya.accusation();
inigoMontoya.warning();
//All together now:
inigoMontoya.seeSixFingeredMan();