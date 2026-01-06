//1) for pure string:
let score = "33"

console.log(typeof score)

let valueInNummber = Number(score)


console.log(typeof valueInNummber)

//2) not a pure string:
//when no a pure number but mix of number and alphabets in a string and then we convert it to number then:

let yoo = "33abc"
console.log(yoo)

let yoo2 = Number(yoo)
console.log(yoo2) //gives NAN -> not a number
//but:
console.log(typeof yoo2) //gives number bcz datatype is number but the value is not a number

//3)for null:
let hey = null
let hey2 = Number(hey)
console.log(hey2)
console.log(typeof hey2)

//4)for undefined:
let bro = undefined
let bro2 = Number(bro)
console.log(bro2)
console.log(typeof bro2)

//5)number to boolean:
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//6)empty string to boolean:
let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

//7)string to boolean:
let isLoggedIn2 = "Komal"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

//NOTE: typeof is very important especially when working on backed=nd because when value is stored in variable by user input you need to know the datatype of it which cant be exactly predicted by 'let' therefore ypeof makes it eaiser


//***********************************************Operations******************** */

let value = 3
let negValue = -value
console.log(negValue);

//some more basic arithmatic operations:
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
//This means:
//2 raised to the power of 3
//It is the exponentiation operator (power).
console.log(2/3);
console.log(2%3);

//concatenation:
let str1 = "komal"
let str2 = " khan"

let str3 = str1 + str2
console.log(str3)

//other eamples of concatenation including strings and numbers:
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //gives 122
console.log(1 + 2 + "2"); //gives 32

console.log( (3 + 4) * 5 % 3);

// Unary plus operator (NOT increment):
// It converts values into numbers:
// Converts boolean to number:
console.log(+true)   // 1
console.log(+false)  // 0

// Converts empty/whitespace string to number (0):
console.log(+" ")    // 0


//we can write variables like this also but not a very good practice in practical:
let num1, num2, num3
num1 = num2 = num3 = 2 + 2


//An example of increment:
let gameCounter = 100;
// Pre-increment: first increases the value by 1, then uses it
++gameCounter;
console.log(gameCounter); // 101

