//while loop is like for loop but we declare the index above the while
//This loop will go in infinity: because we are not incrementing the index duw to which the index remains 0 the whole time so it never increases than 10 on whihc we want the loop to end

// let index = 0;
// while (index <= 10){
//     console.log(`value of index is ${index}`);

// }


//now let's increment the above loop:
let index = 0;
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2;
} 
//This time the output will be: (we will get every other number after 0 because we have used + 2 in increment)
                        // value of index is 0
                        // value of index is 2
                        // value of index is 4
                        // value of index is 6
                        // value of index is 8
                        // value of index is 10



//Now, let's run iterate this loop through an array:
let myArray = ["Komal", "star", "Alita"];

let arr = 0;
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
} 
//output: 
        // value is Komal
        // value is star
        // value is Alita



//we also haeb a do while loop: In do while loop the thing is that, even if the condition is not being satisfied, the execution must happen once that we have put in the braces of do, because the condition is defined after 'do'
let score = 0;
do{
    console.log(`Score is ${score}`);
    score++
} while (score <=10);

//the output:
            // Score is 0
            // Score is 1
            // Score is 2
            // Score is 3
            // Score is 4
            // Score is 5
            // Score is 6
            // Score is 7
            // Score is 8
            // Score is 9
            // Score is 10


// Arrays and strings are iterable.
// We can use for-of loop and break with them.
// Objects are not iterable directly with for-of.
// For objects, use Object.keys(), Object.values(), or Object.entries().

// Map is a built-in object in JavaScript that stores key-value pairs.
// It is not like an array; it is key-based, not index-based.

// In Map, keys are always unique.
// Setting the same key again overwrites the previous value.
// Values can be duplicated.
// Objects also have unique keys (duplicate keys overwrite).

// Map must be created using the new keyword.
// Example: const map = new Map();
// Map has no literal syntax like {} or [].
// It is a constructor that creates Map instances.