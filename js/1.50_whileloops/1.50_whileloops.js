//While Loops

//We're setting a variable "age" at 0.
var age = 0;
		//Now we'll set a condition:
		//While the age is less than 100, it will
		//complete the function that we'll set next.
while(age < 100) {
	//Now for the function:
	age++;
	//Print to the console
	console.log(age);
}

//We can add an extra condition to the function:
var age = 0;
while(age < 100) {
	age++;
	console.log("I am " + age + ".");
//we'll set a variable that throws out an
//extra function if a condition is met:
//if the variable is 33, it will print a statement:
	if (age === 33){
	console.log("How did this happen?");
	}
}




//We can add one more condition here, which is
//else.  
var clock = 0;
while(clock < 60){
	clock+=5;
	if(clock === 30){
		console.log(clock + " seconds left");
	} //so if the variable equals 30, it performs the function above
	else {
		console.log(clock + " tick");
	}//or else it will perform the function above 
}