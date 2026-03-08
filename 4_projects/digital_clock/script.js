const clock = document.getElementById('clock');

//or:
//const clock = document.querySelector('#clock');

setInterval(function(){ 
// setInterval is the loop! You don't need a for or while loop here because setInterval 
// is a built-in JavaScript function that repeatedly calls your function at a set time 
// interval — forever, until you stop it.
    let date = new Date();
    console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// The 1000 means 1000 milliseconds = 1 second, so your function 
// fires every second automatically.
//Its counterpart is setTimeout (counterpart for setInterval)

//If you ever want to stop the interval, you can do:

// const timer = setInterval(function() {
//     console.log("running...");
// }, 1000);

// clearInterval(timer); // stops it

// setTimeout → runs once (like a single line of code with a delay)
// setInterval → runs forever repeatedly (like a loop with a delay)

