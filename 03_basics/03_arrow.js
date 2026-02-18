
//when accessing in the scope(in current context) we use this keyword
const user = {
    username: "komal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //gives: {
                            //   username: 'komal',
                            //   price: 999,
                            //   welcomeMessage: [Function: welcomeMessage]
                            // }
                            //when accessing in the scope(in current context) we use this keyword
    }
}

user.welcomeMessage();
console.log(user.username); //gives: komal

//let's update the value of username:
user.username = "sam"
console.log("updated value", user.username);
user.welcomeMessage(); //this will also show same (an updated value) in its output


console.log(this); //gives: {}
// gives {} empty bcz there is no current context, an empty objecxt node environment but in browser it gives window

//let's make a function chai use 'this' in it:
function chai(){
    let username = "Komal";
    console.log(this.username);
}

chai(); //gives: undefined. Why?
//because: 
// this refers to:
// the global object (in browser → window)
// or undefined in strict mode
// But your username is NOT inside the global object.
// Node wraps your file in a module, so behavior feels different.

// this depends on HOW the function is called.
// obj.method() → this = obj
// normalFunction() → this = global (or undefined in strict mode)

//Because, in case of user.username above it worked perfectly with 'this' because overthere we didn't call the outer function, rather we called the inner function which was an attribute of an object

//Now, let's use this in a function that has been put in a variable:
const biscuit = () => {
    let username = "Komal Khan";
    console.log(this);
}
biscuit(); //gives: {} 
//because Arrow functions borrow this. Arrow function says: “I don’t know who I am (this), let me ask my parent scope.”
//Arrow functions don’t get their own this.
//Instead, they look outside (their surrounding scope) and use the this from there.
// So the arrow function uses the same this as the parent, which is {}
//even if you don’t explicitly use this in the parent scope, it still exists, because every scope in JavaScript has a this value.


/////////////////////arrow functions:///////////////////////
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

const addTwo2 = (num1, num2) => num1 + num2; // if wraping in curly braces then must wrtie return otherwise not //explicit return means when we write retturn ekyword

const addTwo3 = (num1, num2) => (num1 + num2); 
// implicit return jab single line me likho

const addTwo4 = (num1, num2) => ({username: "Komal"}) ////to return an object u must wrap the curl braces in the parenthesis

console.log(addTwo1(2, 3));//gives: 5
console.log(addTwo2(2, 3));//gives: 5
console.log(addTwo3(2, 3)); //gives: 5
console.log(addTwo4(2, 3)); //gives: { username: 'Komal' }

//foreach:

const myArray = [2, 5, 3, 7, 8];
myArray.forEach(e => console.log(e));
