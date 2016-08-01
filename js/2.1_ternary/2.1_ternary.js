location.hostname === "localhost" ? console.log("local") : console.log("not local");

// is the same as
if ( location.hostname === "localhost" ) {
console.log("local");
} else {
console.log("not local");
}