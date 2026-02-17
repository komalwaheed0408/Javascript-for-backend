const marvel_heroes = ["David", "Roshan", "pret"];
const dc_heroes = ["batman", "powerpuff", "Lola"];

//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes); //gives: [ 'David', 'Roshan', 'pret', [ 'batman', 'powerpuff', 'Lola' ] ]
//which means, the push added dc_heroes array as an element in marvel_heroes array

//console.log(marvel_heroes[3][1]); //gives: powerpuff //we used double indexes to tell that whihc element from the second array whcih also is an element

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); //this concatenate the two arrays together but you need to store it in a different variable

//another way, the best one so far to merge two arrays:
const all_new_heroes = [...marvel_heroes, ...dc_heroes];// ... (spread operator) expands arrays
// Combines both arrays into one new array
// Does NOT modify original arrays
console.log(all_new_heroes); 


//nested array:
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// flat() removes nested arrays (makes array flat)
// Infinity means: flatten ALL levels of nesting


//Static method of the Array object:
console.log(Array.isArray("komal")); //gives false
//its syntax: Array.isArray(value)
console.log(Array.isArray([1,2,3]) );  // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}) );       // false

// Why we use it?
// Because in JavaScript:
// typeof [1,2,3]
// returns: "object"
// So typeof cannot properly detect arrays.
// 👉 That’s why we use Array.isArray() — it correctly checks arrays.
//Therefore: Array.isArray() → safely checks if something is an array.

//similarly, we have some other static methods of array object:
// Array.from() → converts things into array
// Array.of() → creates array from given values
// Array.isArray() → checks if value is array
console.log(Array.from("komal")); //gives: [ 'k', 'o', 'm', 'a', 'l' ]
//explanation to above line:
// A string is iterable.That means JS can loop through it character by character.
// So it converts it into:
// ["k","o","m","a","l"]
console.log(Array.from({name: "komal"})); //gives: []
//explanation to above line:
// This is a plain object. Objects are ❌ not iterable by default.
// So JS doesn’t know:
//     Should it convert keys?
//     Should it convert values?
//     Should it convert both?
// Since it cannot iterate it → it returns: []
//BECAUSE:
// Array.from() works on:
// ✔ Iterables (string, array, map, set)
// ✔ Array-like objects (objects with length and index keys)
// But { name: "komal" } has:
// no indexes (0,1,2…), no length property, not iterable. So it becomes empty array.

///////////////////////////////////////////////////////
// If you want array from object:
// Object.keys({name: "komal"})   // ["name"]
// Object.values({name: "komal"}) // ["komal"]
//example:
console.log(Object.keys({name: "komal"}) );
console.log(Object.values({name: "Komal"}));

//of:
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //gives: [ 100, 200, 300 ]