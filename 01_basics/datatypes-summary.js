//Two types of datatypes:
//1) Primitive: when such variable is used in some other variable it gives it the copy of that value therefore any change in the second variable won't affect the first copy:
//a) string: 
//b) Number:
const score = 100
const scoreValue = 100.3

//c) Boolean:
const isLoggedIn = false
//d) null:
const outsideTemp = null
//e) undefined: 
let userEmail;
//f) Symbol: it is used to make any value unique, we wrap a button in symbol to make it unique in advanced js frontend development:
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof anotherId);
//g) BigInt: used for scientific big values
const bigNumber = 3456543576654356754n

//2) Reference (non primitive): when we are allocated the reference of it in the memory: therefore the change in a variable that refers to an original value will change both:
//a) Array:
const heros = ["shaktiman", "naagraj", "doga"];
//b) object: 
let myObj = {
    name: "hitesh",
    age: 22,
}
//c)functions:
const myFunction = function(){
    console.log("Hello world");
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Types of memory:
//1) Stack: primitive

let myName = "komal"
let name2 = myName
name2 = "khan"
console.log(myName)
console.log(name2)

//2) Heap: Non-primitive:

let user = {
    email: "komal@gmail.com",
    id: "user@abc"
}

let user2 = user;

user2.email = "brooo@gmail.com"

console.log(user)
console.log(user2)
//Hence, both changed! because we get the reference in case of heap which happens for non primitive datatypes only.
