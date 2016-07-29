//For loops are divided into three sections:

//(the variable i is a convention in for loops/*here you set the variable*//*here you set the conditional*/
/*and here you set something to execute.)*/
  for( var i = 1; i <= 10; i++){
	console.log(i);
}

//Practice
for(var i = 0; i <= 55; i+=5){
	console.log(i);
}

for (var i = 20; i > 1; i--){
	console.log(i);
}


for(var i=3;i<30;i+=5){
	console.log("Add 5: " + i);
}

// Practice problem from codeschool

// The output should follow this format:

// Generator #1 is off.
// Generator #2 is on, adding 62 MW, for a total of 62 MW!

// We’ve given you some starting variables to use 
//in your build. Within your loop, consider the possible 
//scenarios when building your conditions:

//     The Generator provides 62 MW of power.
//     The Generator provides 124 MW of power.
//     The Generator is off.
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
while (currentGen <= 4){
  totalMW = currentGen * 62;
	console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
      currentGen++;
}
for ( currentGen > 4; currentGen <= 19; currentGen++){
totalMW = totalMW + 124;
	console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}
for (currentGen > 4; currentGen <= 124; currentGen ++){
// console.log("Generator #" + currentGen + " is on.")
if (currentGen % 2){
	console.log("Generator #" + currentGen + " is on.");}
	else {
		console.log(null);

}
}


// With a set of complex conditional statements 
//inside the loop, construct a way to only turn on 
//even numbered turbines. Remember our power output situation:

//     Generators 1 through 4 produce 62 MW.
//     Generators 5 through 19 produce 124 MW.
