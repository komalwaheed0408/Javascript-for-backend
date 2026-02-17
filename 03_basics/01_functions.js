//Instead of writing: 
// A
// l
// i
// t
// a
//everywhere, you can put it ina function adn then call that function in all that palces where you want it

function sayMyName(){

    console.log("A");
    console.log("l");
    console.log("i");
    console.log("t");
    console.log("a");
}

//calling it:
sayMyName();

//1) making a fucntion and then calling it:
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5);


//2) makign a function and returning a value:
function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    //or, simply use:
    return number1 + number2
}
console.log(addTwoNumbers(2, 5));

//or:

let result = addTwoNumbers(1, 1);
console.log(result);

//You can alsoa ssign a defaut value to a parameter when defining a function:
function loginUserMessage(username = "sam"){ //a default value of username

    //if(username === undefined) //or
    if(!username){ //if username is false //more professsional than above line
        console.log("Please, enter a username"); //but code would never go in this block (unless u pass an empty string) bcz you have assigned a default value sam
        return;
        console.log("heloooooo"); //this line would never be executed because whatever you write after return, never executes
    }
    return `${username} just logged in` //string interpolation

}

console.log(loginUserMessage("Elsa")); //gives: Elsa just logged in
console.log(loginUserMessage()); // gives: sam just logged in
console.log(loginUserMessage("")); // gives: Please, enter a username
console.log(loginUserMessage(null)); // gives: Please, enter a username


//we can also use more than parameters: usually used in shopping carts in ecommerce sites:
function calculate (num1){
return num1;
}
console.log("first one: ", calculate(200)); //gives: 200

//what if we have more than values:
function calculate (num1){
return num1;
}
console.log("second one: ", calculate(200, 300, 400)); //gives: 200 but we need all the value so?
//so we use rest operator, sometimes called spread operator. It depends on its use case whether we should call it rest operator or spread operator
//let's use rest operator: rest means all the parameters you have passed will be returned to you 
//also remember that it returns an array: the values all will be shown in s form of an array
function calcu (...num1){

    return num1;

}
console.log("used rest operator: ", calcu(200, 300, 60000)); //gives: used rest operator:  [ 200, 300, 60000 ]

//mostly people use two parameters and one with rest operator:
function calculateCartPrice(val1, val2, ...num1){ //so in this case, first value will be assigned to val1, second value will be assigned to val2, and rest of the values you pass in arguments will go to the rest operator:
    return num1; //since we are rturning num1 only so only those values will be given in the output which were assigned to num1

}
console.log("returning values of rest operator only: ", calculateCartPrice(200, 400, 500, 2000)); //gives:  [ 500, 2000 ]


//we will make an object which we will pass as a prameter to a fucntion below:
const user = {
    username: "Komal",
    prices: 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
} //here, we can also check the datatypes of the properties of the object that we have used in our function, but for that we need to write mare code in javascript. But if you are using typescript then it is easier.

//now let's call this function;
handleObject(user);

//If we didn't make this object then we can also make it while we call a funciton:
handleObject({
    username: "Elsa",
    price: 399
});

//now, let's do the same thing with an array as we did with an object:
const myNewArray = [200, 300, 400, 100, 600];

function returnSecondValue(getArray){
    // return getArray[1]; //gives: 300
    return getArray; //gives: [ 200, 300, 400, 100, 600 ]
}

console.log(returnSecondValue(myNewArray)); //gives: [ 200, 300, 400, 100, 600 ]
//you can also pass the array directly wihtout putting an array in the variable separately: 
console.log(returnSecondValue([200, 400, 500, 1000])); //gives: [ 200, 400, 500, 1000 ]