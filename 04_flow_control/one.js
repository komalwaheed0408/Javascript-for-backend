//if-else conditions:

const isUserLoggedIn = true;
const temperature = 40;

if (temperature === 40){
    console.log("it is less than 50")
} else{
    console.log("temperature is greater than 50");
}

console.log("Execute"); // This must be executed regardless of the condition because it is outside of the scope.
//These are the operators we use in codition: <, >, <=, >=, ==, !=, ===, !==


///////////////////////


const score = 200;
if(score > 100){
    let power = "fly";
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`); //This line gives error: power is not defined, because power is defined in the if scope


////////////////////////////////


const balance = 1000;

if (balance > 500) {
  console.log("test");
  console.log("test2");
}


//or

// const balance = 1000;
// if(balance > 500) console.log("test"), console.log("test2");


// ⚠️ But this style is not recommended because:
// It looks confusing
// It’s easy to misunderstand
// Braces {} are clearer and safer
// Without {}, if only controls one statement.
// But because the comma operator makes it one combined expression, both logs run when condition is true.

if(balance < 500){
    console.log("less than 500");
}
else if (balance < 750){
    console.log("less than 750");
}
else{
    console.log("less than 1200");
}


////////////////////////////////////

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 3) { //you can put two or more conditions to check like we did here

    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
