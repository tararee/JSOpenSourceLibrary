
//Strings
//Strings contain more than one value inside of a variable
//To the best of my knowledge, you can put more or less anything
//in them.

//You put text in quotations
var myName = "Tara";
console.log(myName);
//You put a string of text in quotations
var myFullName = "Tara Ree Miller";
console.log(myFullName);
//you don't put a defined variable into quotations,
//which is why it wasn't console.log("myFullName")
//which would have printed "myFullName" instead
//of Tara Ree Miller



var myLocation = "on a boat";
var myAttire = "swim trunks";
var myAttireTwo = "flippy floppies";
var myActivity = "flippin' burgers";
var yourLocation = "Kinko's";
var yourActivity ="straight flippin' copies";

var comma = ",";
var period = ".";

//Concatentation is adding strings together using
//a + sign. It's fun. It's hard not to call it concantenation #truefacts
console.log("I got my " + myAttire + " and my " + myAttireTwo + period + " I'm "
 + myActivity + comma + " you at " + yourLocation + ", " + yourActivity + " .");
//notice that you can either use the comma that we added as a variable, or 
//just throw a comma in some quotation marks. I think the latter is easier,
//because you can control the spaces around it.
//var birthPlace = birthCity + comma + birthState;
//console.log(birthPlac2e);

// Challenge: 
//Write a string that has two variables. Output I graduated from Carmel High School in 1994.


//Here, let's make a variable out of a concatenation

var activity = "Bustin' ";
var speed = 5;
var SIUnit = " knots";

//the following is the concatenated variable
var takeALookAtMe = (activity + speed + SIUnit);

//
console.log
(takeALookAtMe + comma + " wind whippin' in my hair");


//Let's concatenate that variable into another
//variable for fun


//Or here's one that is clearer, simpler,
//and easier to use for data mining

var firstName = "Tara";
var lastName = "Miller";
var age = 33;
var gender= "female";

var personalInfo = firstName + " " + lastName + comma + " " + age + " "
+ comma + gender;
console.log(personalInfo);

//In summary:

var introduction = "Hi, my name is " + firstName + " " + lastName + period +
" I am " + age + " years old, and I'm " + myLocation + period;
console.log(introduction);

