//some notes:

// javaScript has a prototype behavior, which means that when you try to access something then if it couldn't be find then JS do not give up but it goes up to the parent then its paret ad so on unless it finds the null.
// and this is why we see '.this' working in Js and similary working of 'new' keyword,  classes, prototypal inheritance.
// Array and string these are both objects and has prototypes and gives null in the end.
// u can heck about them in console in the browser.

//what about a function? let's see:

function multiplyBy5 (num){
    return num*5
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
 console.log(multiplyBy5.prototype);

 //output:
// 25
// 2
// {}   //this tells that a function is also an object

function createUser(username, score){
    this.username = username;
    this.score = score;

}
createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function (){
    console.log(`price is ${this.score}`);
}
 
const chai = new createUser("komi", 25)
const tea = createUser("coffee", 250)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/