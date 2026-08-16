const promiseOne = new Promise(function(resolve, reject)  

{ 
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);

})

promiseOne.then(function() {
    console.log("Promise consumed ");
})

//or: the onl diff is that we are not storing the promise in a variable, we are directly creating it and consuming it.

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async2 task is complete');
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async2 resolved ");
})

//third:

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "komi", email: "kay@mail.com"}); // that's the data we are passing to the next then block
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
});


//forth:

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //for practice, try both, error = true and also try error = false.
        let error = false;
        if (!error)
          { 
                 resolve({username: "komi", email: "kay@mail.com"})
         }

    else{
        reject('Error: Something went wrong')
    }}, 1000);
});

//you can use more than one '.then'. we call it chainin, needed while dataase connection, or when we need to use the data from the previous then block in the next then block.

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})


// console.log(username) // this will not work because the username is not defined in this scope, it is defined in the previous then block. so we need to return the username from the previous then block and use it in the next then block


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve ({username: "javascript", password: "123"})
        } else {
            reject('Error: Js went wrong')
        }

    }, 1000)
});

// async function consumePromiseFive() {
//     const response = await promiseFive;
//     console.log(response);
// }

// consumePromiseFive()


//or to graefully handle the error, we can use try catch block

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//we use asyn bcz it allows us to write asynchronous code in a synchronous manner, making it easier to read and understand. The 'await' keyword pauses the execution of the function until the promise is resolved or rejected, allowing us to handle the result or error in a more straightforward way.

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // we must use 'await' here because response.json() returns a promise, and we need to wait for it to resolve before we can access the data. Otherwise we would be trying to access the data before it is available, which would result in an error.
        console.log(data);

    }
    catch (error) {
        console.log(error);
    }
}

getAllUsers()

//to write the above coe in '.then' block, we can do it like this:

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    }) //we will us another '.then' block to handle the data returned from the previous '.then' block, because response.json() returns a promise.
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => { console.log(error) })


    //Now if u run this file, you will see the initial outputs in the end, because the fetch is an asynchronous operation, and it takes some time to complete. So the initial outputs will be printed first, and then the data from the fetch will be printed later when it is available.