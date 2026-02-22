// In JavaScript, when a value is used inside a condition:

// if (value) {
//    // runs if value is truthy
// }

// JS automatically converts it to true or false.
// This automatic conversion is called type coercion (to Boolean).



// ////////////////////////////////////



// ❌ Falsy Values (ONLY these in JavaScript)
// There are exactly 8 falsy values in JS:


// false
// 0
// -0
// 0n      // BigInt zero
// ""      // empty string
// null
// undefined
// NaN

// 👉 That’s it. No more.
// Everything else is truthy.



// //////////////////////////////////////



// ✅ Truthy Values:

// Anything that is NOT in the falsy list is truthy.

// Examples:

// "0"
// "false"
// " "
// []
// {}
// function(){}
// -5
// "hello"

// Even empty array [] and empty object {} are truthy in JS.


// ////////////////////////////////////


// 🤔 Is this rule in every language?

// No ❌
// JavaScript → has truthy/falsy concept
// Python → also has similar concept
// C++ → does NOT work like JS (no automatic object truthiness like this)
// Java → stricter (conditions must be boolean)
// So this behavior depends on the language.
// 🔥 Simple Rule to Remember


// In JavaScript:
// Only 8 falsy values exist.
// Everything else is truthy.



const userEmail = [] //This is an empty array

if(userEmail) {
    console.log("Got user email");  //this will be executed in output because [] is a truthy value
}
else{
    console.log("Don't have user email") //this will not be executed in output
}


///////////////////////

if(userEmail.length === 0){
    console.log("Array is empty"); //yes, this will be executed since the coditions results in true
}

/////////////////////////////

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Explanation:
// Object.keys(obj) → returns an array of all keys in the object.
// emptyObj has no keys → Object.keys(emptyObj) is [] → length is 0.
// So the condition length === 0 is true.
// Output:
// Object is empty

// ✅ This is a common way to check if an object has no properties.

///////////////////////////////////////////////////////////////////////////////////////////


// === vs == in JavaScript
// == (double equals) → loose equality
// Converts (coerces) the values to the same type before comparing.

// Example:
// 0 == "0"  // true  (string "0" is converted to number 0)
// null == undefined  // true
// === (triple equals) → strict equality
// No type conversion. Values must be exactly the same type and value.

// Example:
// 0 === "0" // false  (number !== string)
// null === undefined // false
// 5 === 5 // true


// Why we use === here
// Object.keys(emptyObj).length === 0
// Object.keys(emptyObj).length → number (0)
// 0 is already a number.
// Using === 0 ensures we are comparing number to number, strictly.
// Using == would still work here, but using === is safer and more predictable, and avoids weird JS type coercion bugs.


// 💡 Rule of Thumb in JS:
// Always use === (and !==) unless you specifically want type coercion with ==.


///////////////////////////////////////////////////////


//About Nullish coalescing Operator (??): null undefined

let val1;
val1 = null ?? 10 ?? 20;

console.log(val1);


//you can also try:
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

// Explanation:
// ?? returns the first value that is not null or undefined.

// Step by step:
// null ?? 10 → 10 (because null is nullish, so it uses 10)
// 10 ?? 20 → 10 (because 10 is not nullish)
// So val1 = 10

// Output:
// 10

// Important: ?? only cares about null or undefined.
// Unlike ||, it doesn’t treat 0, "", or false as nullish.



////////////////////////////      Ternary Operator        //////////////////////////////
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


// Explanation:
// Syntax: condition ? valueIfTrue : valueIfFalse
// Here: iceTeaPrice <= 80 → 100 <= 80 → false
// So it executes the false branch:
// more than 80