//declaring a string:
const name = "Komal "
const repoCount = 50;
console.log(name + repoCount + " value") //outdated syntax to be used for concatenation

//backticks: string interpolation is more modern way to write strings:
/*String interpolation is a programming feature that lets you embed variables, 
expressions, or values directly into a string literal using placeholders 
(like {$variable} or #{variable}) instead of messy concatenation, creating more 
readable and efficient formatted strings for things like user messages or data display, 
common in languages like Python, C#, JavaScript, and Ruby. */

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

//another way to declare a string:(using new operator which is an object of javascript)
const gameName = new String ('Komal');
//In console on browser it will show you this:
/*
String {'Komal'}
0: "K"
1: "o"
2: "m"
3: "a"
4: "l"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Komal" 
*/
//which simply gives u a length property and many more methods when u open 'prototype'

//let's access first index:
console.log(gameName[0])

//let's access proto, it will show empty string but in reality our objkect is not empty we know this:
console.log(gameName.__proto__);

//length:
console.log(gameName.length)
//upper case:
console.log(gameName.toUpperCase())

//to find what chaacter lies at which index:
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'));

//using our object.methos of a string and puting it in a variable to print it:
const newString = gameName.substring(0, 4) //here the fourth one doesn't get included
console.log(newString);

//using slice: starts from end to start and wil give 4 letters duw to we used 4
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//when I don't want extra space around the string:
const newStringOne = " komal "
console.log(newStringOne);
console.log(newStringOne.trim());

//when u write a url, if in case u give an ampty space in between then the browser considers that empty space as %20 so we like to replace the %20:
 const url = "https://hitesh.com/hitesh%20choudhary"
 console.log(url.replace('%20', '-'))

 //to check if a particular word in included in the url string or not, this returns a boolean value:
 console.log(url.includes('hitesh'))

 //a method to convert your string to an array: we will convert gameName to array on the basis of dash, you can also split it on the basis of something else:
 const gameName1 = new String ('K-o-m-a-l');
 console.log(gameName1.split('-'));

 