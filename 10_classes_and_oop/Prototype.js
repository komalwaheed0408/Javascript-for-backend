//Some notes to rea and understand:
// In JavaScript, a prototype is an object that other objects can inherit 
// properties and methods from. It is the foundation of JavaScript's inheritance system.

// Why do prototypes exist?

// Instead of copying methods into every object, JavaScript stores shared methods in a prototype. 
// This saves memory and makes code reusable.


//example:  (without a prototype):
function Person(name) {
  this.name = name;

  this.sayHello = function () {
    console.log("Hello, I'm " + this.name); 
  };
  //Here, each Person object gets its own copy of sayHello, which is inefficient.
}

//with a prototype: 
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.sayHello(); // Hello, I'm Alice
p2.sayHello(); // Hello, I'm Bob

//Now, sayHello exists only once on Person.prototype, and both objects share it.

// How prototype lookup works
// When you access a property:
// console.log(p1.sayHello);
// JavaScript searches in this order:

// Does p1 have sayHello?
// If not, check p1's prototype (Person.prototype).
// If not found, check the prototype's prototype.
// Continue until null.

// This is called the prototype chain.

// p1
//  │
//  ▼
// Person.prototype
//  │
//  ▼
// Object.prototype
//  │
//  ▼
// null

///////////////////////////////////////


let myName = "Komal    "
let myChannel = "Komiii   "

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.komal = function (){
    console.log(`Komal is present in all objects`)
}

Array.prototype.heyKomi = function(){
    console.log(`komal says hello`)
}

heroPower.komal()
myHeros.heyKomi()
myHeros.komal()
 //heroPower.heyKomi()            //the abve three lines work but this doesn't bcz heroPower is an object but heykomi uses the prototype of an array so if we look in the tree then the bject comes at top most and array comes afterwards, so anything made for array can't be applied on object but somethng made for  object can be applied on array, as we can move top to bottom but not bottom to top.

//inheritance:

const User = {
 name: "chai",
 email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "komalis_here    "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Komal".trueLength()
"iceTea".trueLength()