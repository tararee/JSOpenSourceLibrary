// Arrays
//
// An array is a variable
// which can hold more than one value at a time.
//Array Literals


var myArray = [];
myArray.length 

//Array Literals

var emptyArray = [];
var person = ["Tara", "Miller", 33];
var beatlesArray = ["John", "George", "Paul", "Ringo"];
var mixedArray = ["John Locke", 4815162342, (1<2)];


//Arrays start at 0
					//0        1        2
var cutleryArray = ["fork", "knife", "spoon"];

//Accessing items
console.log(beatlesArray[1]); //1 item
console.log(mixedArray); // all items

//.length method
console.log(mixedArray.length); //Gives the number of items in the array.


//Adding to an array - use  .push() ->This is a prebuilt function that needs a paramter.
beatlesArray.push("Pete Best");
console.log(beatlesArray); //Now has a new member.

//Taking something away use .pop()- another prebuilt function
cutleryArray.pop("knife");
console.log(cutleryArray); //Only has two values now, is safer.