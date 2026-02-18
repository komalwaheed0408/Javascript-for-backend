//to avoid pollution from global scope and for imediTE EXECUTION WE USE IIFE
//SEMICOLON NEEDED FOR TWO IIFEE BUT WHAT IF TWO SIMPLE OR ARROW FUNCTION TOGETHER(NOT IFFE)?

// Immediately Invoked Function Expressions (IIFE)
(function chai(){
console.log(`DB CONNECTED`);
})();

//You need a semicolon before the second one if it’s right after another statement. But Two “normal” functions or arrow functions No semicolon needed here.
// Why? Because these are declarations, not expressions.
// JavaScript knows where one ends and the next begins.
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Komal`)

//you don't need to call these functions separately rather they will be called immediately when we run this program

// Arrow functions assigned to variables are expressions:
const a = () => console.log("a")
const b = () => console.log("b")
// Semicolons are optional but recommended to avoid issues.

// Rule of Thumb:
// IIFEs → always put semicolon before if it follows another statement.
// Function declarations → semicolon not needed.
// Arrow functions assigned to variables → semicolon optional, but safer to put one if the next line starts with (, [, +, or -.