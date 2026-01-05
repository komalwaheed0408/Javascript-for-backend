const accountId = 144553

// It doesn't matter in JS to whether use semiclumn at the end or not.

let accountEmail = "komalll@google.com"
//let is used but

var accountPassword = "Jaipur"
//var is old one and not used now

/*
preferred not to use var
*/ 

let accountState;
//when u don't put value = undefined

accountCity = "Kohat"
//this above line shows how we didn't use any datatype. Sometimes this is used.


// accountId = 2
//above line will give error as we can't update the vaue of constant

console.log(accountId);


//let's update other variables:
accountEmail = "komi@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

//now let's print them all at once instead of one by one to save time:
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])