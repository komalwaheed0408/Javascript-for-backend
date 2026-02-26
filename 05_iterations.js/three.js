//for-of loop:

//this is how strings in array looks like:
//["", "", ""]

//objects in the array: That's how database send us the data:
//[{}, {}, {}]


//an array:
const arr = [1, 2, 3, 4, 5]

for(const num of arr){ //Here 'num' is the new variable name which will do the job of iteration
    console.log(num);
}
//The output:
            // 1
            // 2
            // 3
            // 4
            // 5

  
           
const greetings = "Hello world!";
for(const greet of greetings) { //here, greet is the variable name

    console.log(`Each char is ${greet}`);

}            
            
//output:
            // Each char is H
            // Each char is e
            // Each char is l
            // Each char is l
            // Each char is o
            // Each char is
            // Each char is w
            // Each char is o
            // Each char is r
            // Each char is l
            // Each char is d
            // Each char is !



//Map:
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('fr', "France");
map.set('IN', "India");


console.log(map); //This will simply print the whole map:
//output:
        // Map(3) {
        //   'IN' => 'India',
        //   'USA' => 'United States of America',
        //   'fr' => 'France'
        // }


 //so we need to use loop fr map also. but when we use for-of loop for map, it has a specific syntax, that we need to follow:       
 for(const [key, value] of map){ //here, the first thing in square bracket refers to the keys of map, second to the values of map
    console.log(key, ':-', value);
 }
 //output:
            //  IN :- India
            // USA :- United States of America
            // fr :- France


 //let's do it just for keys:
 for(const [key] of map){

    console.log(`these are the keys: ${key}`);

 }           

 //ouput:
            //  these are the keys: IN
            // these are the keys: USA
            // these are the keys: fr



//Now, these are just for the values:
for (const value of map.values()) {
   console.log(`these are the values: ${value}`);
}            
//output:
            // these are the values: India
            // these are the values: United States of America
            // these are the values: France
            // PS C:\Users\anoon\Documents\Javascript-for-backend-1> 





//Now, what about an object? can we use for-of loop for an object, or not?
//No! Objects are not iterable directly with for-of.
// For objects, we use something else, go to four.js file
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//still, let's try once, for-of loop on the object:
// for(const[key, value] of myObject){
//     console.log(key, ':-', value);
// } //this gives an erorr: TypeError: myObject is not iterable

          
            
