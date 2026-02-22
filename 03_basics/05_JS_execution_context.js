//All theory in this file, because it is about understanding:
// JavaScript runs our program in two phases.
//Whenever you write code in javascript, global execution context gets made for it and referred byu this. But what if we are in browser? So it works differently in node js environment and in browser.
//In browser, 'this' is window object as value

//////////////////////////////////



// What is Global Execution Context (GEC)?
// In JavaScript, when your code starts running, the engine first creates something called:
// Global Execution Context
// It is the default environment where your code runs.
// It:
// Creates the global object
// Sets the value of this
// Creates memory for variables and functions
// It is created only once when the program starts.



///////////////


// In Browser:
// In the browser, the global object is:
// window
// So:
// console.log(this); // window
// At global level:
// var a = 10;
// console.log(window.a); // 10
// Because:
// var variables become properties of window
// this === window in global scope



////////////////////////




// In Node.js:
// In Node, the global object is:
// global
// BUT important difference:
// In Node:
// console.log(this);
// It does NOT return global.
// Instead, it returns:
// {}
// Why?
// Because Node wraps your file inside a function like this:
// (function(exports, require, module, __filename, __dirname) {
//    // your code here
// })
// So in Node:
// Top-level this = module.exports
// Not the global object
// Also:
// var a = 10;
// console.log(global.a); // undefined
// Because var does NOT attach to global in Node.




//////////////////////////////////////


// 1) Inside Regular Function
// function test() {
//    console.log(this);
// }
// Browser (non strict mode) → window
// Node → global
// In strict mode → undefined

// 2) Inside Arrow Function
// Arrow functions:
// Do NOT have their own this
// They use parent scope's this


//Also, remember that javaScript is singlethreaded:

// What does “JavaScript is single-threaded” mean?
// It means:
// JavaScript can execute only one piece of code at a time.
// It has:
// ✅ One call stack
// ❌ Not multiple threads running JS code simultaneously
// So it does things one by one, not in parallel.

// 🧠 What is a Thread (simple)?
// A thread is like a worker.
// Multi-threaded language → many workers working at same time
// Single-threaded → only one worker
// JavaScript = one worker

// 🔥 Example
// console.log("A");
// console.log("B");
// console.log("C");

// Output:
// A
// B
// C

// It must finish "A" before starting "B".
// It cannot do them together.
// 🤯 Then how does setTimeout work?
// If JS is single-threaded, how does this work?
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside");
// }, 2000);

// console.log("End");

// Output:
// Start
// End
// Inside

// Why?

// Because:
// JavaScript itself is single-threaded
// But the environment (browser or Node) provides:
// Web APIs (browser)
// Libuv (Node)
// They handle async tasks outside the call stack

// JS just:
// Sends async task outside
// Continues running other code
// When ready → callback goes to event loop
// Then back to call stack
// So JavaScript is single-threaded,
// but it can handle asynchronous behavior.

// ⚡ Important Concept
// Single-threaded means:
// One call stack
// One thing executing at a time
// No true parallel execution of JS code

// It does NOT mean:
// It cannot handle multiple tasks
// It cannot be asynchronous

// 💡 Very Simple Real-Life Example:
// Imagine:
// You are alone in kitchen (single-threaded).
// If:
// Cooking rice takes 20 minutes
// Instead of waiting, you put it on stove
// Then you cut vegetables
// You are still one person.
// But you manage tasks smartly.

// That’s JavaScript.


//////////////////////////////////////////////


// EXECUTION CONTEXTS IN JAVASCRIPT:

// JavaScript has 3 types of Execution Contexts:

// Global Execution Context (GEC)
// Function Execution Context (FEC)
// Eval Execution Context
// Let’s make it simple.

// 1️⃣ Global Execution Context (GEC)
// Created once
// Created when JS file starts running
// Creates:
// Global object (window in browser, global in Node)
// Sets this
// Stores global variables & functions
// It stays until program ends.

// 2️⃣ Function Execution Context (FEC)
// Whenever a function is called, a new execution context is created.
// Example:
// function greet() {
//   let message = "Hello";
//   console.log(message);
// }

// greet();
// When greet() runs:
// 👉 JS creates a new Function Execution Context
// It has:
// Its own local memory
// Its own scope
// Its own value of this
// Its own variables and parameters
// After the function finishes:
// 👉 That execution context is destroyed (removed from call stack).
// Important:
// Each function call creates a new FEC
// function test() {
//   console.log("Hi");
// }

// test();
// test();
// Two calls = Two different execution contexts.


// 3️⃣ Eval Execution Context:
// This is created when you use:
// eval("var x = 10");
// It executes a string as JavaScript code.
// When eval() runs:
// 👉 JS creates a separate Eval Execution Context

// But:

// ⚠️ It is rarely used
// ⚠️ It is dangerous
// ⚠️ It slows performance
// ⚠️ Not recommended in real-world development
// That’s why most developers ignore it.


// 🔥 Big Picture (Very Important)
// Think like this:
// Global Execution Context → created first
// When function runs → Function Execution Context pushed on call stack
// When function ends → removed
// If eval runs → Eval Execution Context created temporarily

// Stack example:

// Call Stack:
// | greet() FEC |
// | Global EC   |

// When greet finishes:
// Call Stack:
// | Global EC |


// 💡 Simple Summary:
// Type:	        When Created:	                   Lifetime:
// Global EC	    When program starts	               Entire program
// Function EC  	When function is called	           Until function finishes
// Eval EC      	When eval() runs	               Until eval finishes




/////////////////////////PHASES://///////////////////////////////////////

// The concept of phases is related to every execution context
// (Global + Function + Eval).
// Every execution context goes through 2 phases:

// 1️⃣ Creation Phase
// 2️⃣ Execution Phase

// Let’s understand it very clearly and simply.
// 🧠 Big Picture First
// Whenever JS creates:
// Global Execution Context
// Function Execution Context
// It does NOT immediately run the code.
// First it prepares memory.

// That preparation is called:
// 🔹 Creation Phase

// After that, it runs the code.
// That is:
// 🔹 Execution Phase


// //////////////////////////////////


// 🔵 Phase 1: Creation Phase (Memory Setup)
// In this phase, JavaScript:
// Creates Variable Environment
// Creates Scope Chain
// Sets value of this
// Allocates memory for variables & functions

// Very important part 👇
// 👉 What happens to variables?
// var → memory allocated and set to undefined
// let and const → memory allocated but not initialized (Temporal Dead Zone)
// functions → stored completely in memory

// Example:
// console.log(a);
// var a = 10;

// function greet() {
//   console.log("Hello");
// }

// During Creation Phase:
// Memory looks like:
// a: undefined
// greet: function definition

// That’s why this works:
// console.log(a); // undefined
// This behavior is called:
// 🔥 Hoisting

// Hoisting = memory allocation before execution.


// //////////////////////////////////////////////


// 🔴 Phase 2: Execution Phase
// Now JavaScript runs the code line by line.
// So:
// var a = 10;
// Now:
// a: 10
// If function is called:
// greet();

// 👉 A new Function Execution Context is created
// 👉 That function ALSO goes through Creation + Execution phases

// 🔥 Important: Functions Also Have Phases

// Example:
// function test(x) {
//   var y = 5;
//   return x + y;
// }

// test(10);

// When test(10) runs:
// New Function Execution Context is created.

// Inside that function:
// Creation Phase:
// x: 10
// y: undefined
// Execution Phase:
// y = 5
// return 10 + 5
// Then it is removed from call stack.
// 💡 Simple Timeline
// For any execution context:

// 1️⃣ Creation Phase
//    - Memory allocation
//    - Hoisting
//    - this binding

// 2️⃣ Execution Phase
//    - Code runs line by line
// 🎯 Very Simple Analogy

// Imagine exam hall.
// Creation Phase:
// Question paper distributed
// Roll numbers assigned
// Seats arranged

// Execution Phase:
// You start writing answers
// Preparation first.
// Work later.

// That’s how JavaScript works.


// 🔥 Final Clear Structure:
// For Global Execution Context:

// Creation Phase runs once
// Then execution starts

// For every function call:
// Creation Phase
// Execution Phase
// Then destroyed


////////////////////////////////////////////////////
//Let's tale an example of a code:

let val1 = 10
let val2 = 5
function addNum(num1, num2){

    let total = num1 + num2;
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


///////////////Now, let's see how execution context occurs for it:
//First of all, global execution starts which sets the value of this. Then in its memory phase: val1 is set to undefined, then val2 is set to undefined, then addNum function is defined (it is not a variable but it is a function so it will be set as defined),
//then result1 is set to undefined, then result2 is set to undefined.
//Then starts the execution phase in which the code will be executed, so val1 is given the value of 10, val2 is given the value of 5 then for the defind function a new variable environment and execution thread occurs.
//Because where function is defined that for it in the execution phase, a separate executional context is made in whcih there will be a new varaible environment and an execution thread so that evrytime this fucntion is called, a bew box will be creted which is known as new executional context. Sinxe this new box is created.
//so both the phases will occur again, the memory phase and execution phase for the scope of function. First for first time we have called it:
// In memroy phase, val1 is set as undefined, val2 is also set as undefined (since both are passed to the num1 and num2 parameters in a fucniton in our first fucntion call) then we also have 'total' varaible in our funciton so it will be also set to undefined, then comes the
//execution phase of this context: so num1 is set to 10, num2 is set to 5 since that are the values of val1 and val2, and the total will be given 15 which then will be then returned to the global execution context. Then this executional context tha was started upon callibng our function, will also be deleted.
//Then back to the execution phase of our global execution context, result1 will be set to 15, then same occurs (a box with new variable environment and an execution thread) for next function call but this time in its memory phase:
//undefined thing occurs, then in execution phase this time 10+2 return 12 to the parent global execution phase.




/////////////////////Call stack://///////////////////////////////////////

// What is Call Stack in JavaScript?
// The Call Stack is a data structure (stack) that:
// Keeps track of which functions are currently running.
// JavaScript is single-threaded, so it has one call stack.
// It works on:
// 📌 LIFO (Last In, First Out)
// The last function added is the first one to finish.

// 🔥 How It Works
// When JS starts → Global Execution Context is pushed into the stack.
// When a function is called → its Function Execution Context is pushed on top.
// When a function finishes → it is popped (removed) from the stack.

// 📌 Example (Nested Functions)
// function first() {
//   console.log("Inside first");
//   second();
// }

// function second() {
//   console.log("Inside second");
//   third();
// }

// function third() {
//   console.log("Inside third");
// }

// first();


// 🧠 Step-by-Step Call Stack Flow:

// 1️⃣ JS starts
// Call Stack:
// [ Global ]
// 2️⃣ first() is called
// Call Stack:
// [ first ]
// [ Global ]
// 3️⃣ second() is called (inside first)
// Call Stack:
// [ second ]
// [ first ]
// [ Global ]
// 4️⃣ third() is called (inside second)
// Call Stack:
// [ third ]
// [ second ]
// [ first ]
// [ Global ]
// 5️⃣ third() finishes
// Call Stack:
// [ second ]
// [ first ]
// [ Global ]
// 6️⃣ second() finishes
// Call Stack:
// [ first ]
// [ Global ]
// 7️⃣ first() finishes
// Call Stack:
// [ Global ]

// 🔥 Output:
// Inside first
// Inside second
// Inside third


// 🎯 Very Short Definition for Notes:
// Call Stack is a LIFO structure that manages execution contexts in JavaScript.
// Each function call is pushed onto the stack, and removed when finished.