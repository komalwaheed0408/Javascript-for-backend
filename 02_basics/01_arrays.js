const myArr = [0, 1, 2, 3, 4, 5];

const myHeroes = ["supergirl", "coder"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]);
console.log(myHeroes); //gives: [ 'supergirl', 'coder' ]
console.log(myHeroes[1]);  //gives: coder
console.log(myArr2[1]);


//Difference between 'new Array(5)' and 'new Array(1, 2, 3, 4)':
const Array1 = new Array(5)
// This means:
// “Create an empty array with length 5”


const Array2 = new Array(1, 2, 3, 4)
// Now JavaScript says:
// “Oh, you gave multiple values — these must be elements.”

// Because the Array constructor was designed with two behaviors:
// 1) numeric argument → treat it as length
// 2)Multiple arguments → treat them as elements

console.log(Array1); //gives: [ <5 empty items> ]

///////////////Array methods://////////////
//1)push and pop:
myArr.push(78);
console.log(myArr);

// myArr.pop();
// console.log(myArr);

//2)unshift:
myArr.unshift(9);
console.log(myArr);

//3)shift:
myArr.shift();
console.log(myArr);


// push() → add student at the end
// pop() → remove student from the end
// unshift() → add student at the front
// shift() → remove student from the front

// push() and pop() are faster
// shift() and unshift() are slower
// Why?
// Because when you change the beginning, all other indexes have to shift.

//4)includes:
console.log(myArr.includes(9)); //gives: false, since thee is no 9 in the srrsy due to shift we did

//5)indexOf:
console.log(myArr.indexOf(78)); //gives the index of the element, therefore we give the element in the parenthesis

//6)join:
const newArr = myArr.join();
console.log(myArr); //gives: [ 0, 1,  2, 3,4, 5, 78]
console.log(newArr); //gives: 0,1,2,3,4,5,78

// join() converts an array into a string.
// By default, it joins elements with a comma ,

//7)slice and splice:
console.log("A", myArr); //A [ 0, 1,  2, 3,4, 5, 78]
const myn1 = myArr.slice(1, 3); //it will give the elements from 1 upto 3-1
console.log("slice: ", myn1); //gives: [ 1, 2 ] 
console.log("myArr: ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("splice: ", myn2);
console.log("myArr: ", myArr);

// slice() → does NOT modify original array, returns a shallow copy (selected portion)
// splice() → modifies original array, can remove/add elements
