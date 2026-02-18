//This isn't problematic:

let a = 10;
const b = 20;
var c = 30;
//since the above defined values are outside the curly braces, they have global scope
console.log("outside the curly braces", a); //gives: 10
console.log(b);
console.log(c);


//The problem is when we get a scope (in function or with if else (here we don't talk about curly baces of an object))
if(true){ // here, true means our code inside this scope must be executed no matter what

    let a = 1000; //has block scope
    console.log("in the curly braces", a); //gives: 1000
    const ae = 20; //has block scope
    // var ad = 30; we dont use var in this case because var can be changed and accessed outside of scope also due to which programmers don't use var
    // var → function scoped
    // let and const → block scoped
    //these can't be accessed outside of this scope
}

console.log("Again printing outside the curly braces", a); //gives: 10


///for loop: Similarly, in case of for loop there is the concept of scope used: we will use 'i' for indexing and we don't want the that 'i' to be useable outside the scope:
const array = [1, 3, 5, 6];
for (let i = 0; i < array.length; i++){
    const element = array[i];
    console.log(element);
}

///////////////////////////////////Global scope in browser Vs in node://////////////////////////////////////////////////

//for this first let's understand scope in emested function (nested scope)
function one (){
    const username = "komal khan";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); we will comment this otherwise this gives error since website is not a global variable

    two();
}

one();


//similarly, we can try to check scope level with using is else:
if(true){
    const username = "komal";
    if(username === "komal"){
        const website = "youtube";
        console.log(username + website);
    }
    //console.log(website); //gives error because website is enclosed in s specific scope

}
//console.log(username); //gives error because website is enclosed in s specific scope


////////////////////////////////////////////////////
//we have two ways for fucniton definition also, one is simple like how we od it, other way is expression by putting it in a variable

console.log(addone(1)); //gives 2
function addone (sum){
    return sum + 1;
} //we can call this function above and below also, both works
console.log(addone(2)); //gives: 3

//the expression way:
// console.log(addTwo(5)); //gives error. So we cant call a fucntion before its definiton if it is defined in the form of expression

const addTwo = function(num){

    return num + 2;
}
console.log(addTwo(5)); //gives 5
//This concept is called hoisting:
// Hoisting means JavaScript moves declarations to the top of their scope before execution.
// But ⚠️ only the declaration, not the value.