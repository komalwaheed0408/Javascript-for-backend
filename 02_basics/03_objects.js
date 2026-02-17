// Every time you do:
// const user1 = {}
// const user2 = {}
// you get two different objects in memory. So it’s not a singleton.

// new Object() → creates normal object
// {} → literal object (same as above)
// Object.create(proto) → creates new object with a specific prototype

// ✅ Singleton only happens if you make sure that no matter how many times you try to create it, you always get the same object.

// For example:

// const Singleton = (function() {
//   let instance;
//   return function() {
//     if (!instance) {
//       instance = { name: "onlyOne" };
//     }
//     return instance;
//   }
// })();

// const obj1 = Singleton();
// const obj2 = Singleton();

// console.log(obj1 === obj2); // true → same object
// See here? obj1 and obj2 are exactly the same object, that’s a singleton 👌


//////////////////////non singleton: obejct literals:
//Symbol is a unique data type that we can use as key in the object, for that we first declare and assign a value to symbol then we use it in the object.
const mySym = Symbol("key1");
const mySymbol = Symbol("key2");

const JsUser = {
    name: "Komal",
    // fullName: "komal waheed",
    "full name": "Komal Waheed", //we access this in form of square bracket only
    age: 18,
    mySym: mySym, //accessing this will give u correct value but will treated as a string datatype rather than symbol datatype
    //No brackets mySym: → key is literally the string "mySym", not the variable.
    [mySymbol]: mySymbol, //accessing thsi will show datatype symbol
    location: "Kohat",
    email: "elsamoon234@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday", "Saturday"]
}

//we usually access the elements this way: 
console.log(JsUser.email); //gives: elsamoon234@gmail.com
//which isn't wrong but we can also do:
console.log(JsUser["email"]); //gives: elsamoon234@gmail.com //remember that we must use douable quotation when accessing this way since the elements are stored in the form of string

console.log(JsUser["full name"]);

//accessing symbol:
console.log(JsUser.mySym); //gives: mykey1
console.log(typeof JsUser.mySym); //gives:  Symbol but it is considered a string                                   

//But: 
console.log(JsUser[mySymbol]); 
console.log(typeof JsUser[mySymbol]);

//to change the value of a key in the object:
JsUser.email = "komalhere@gmail.com";

//but if u want that no one should be able to change the values then we freeze it:
// //Object.freeze(JsUser);
// JsUser.email = "Komal1234@gmail.com";
//print the object to confirm what was updated and what was not
// console.log(JsUser);

//adding an attribute to our object and puttting a function in it and then accessing it:
JsUser.greeting = function(){
    console.log("Hello JS user");
}

//now accessing:
console.log(JsUser.greeting); //gives: [Function (anonymous)]

//but if we put put parenthesis;
console.log(JsUser.greeting());

//Now, to refer the same object we use 'this' keyword:
JsUser.greeting1 = function(){
 console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting1());