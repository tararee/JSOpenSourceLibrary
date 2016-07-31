
var arr = [1, 2, 3, 4];
var sum = 0;
function myFunction(itemValue, itemIndex) {
	sum += itemValue;
	console.log("itemIndex: " + itemIndex + " - Sum: " + sum);
}
arr.forEach(myFunction);