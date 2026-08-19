const user = {
    username: "komiii",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}`)
      console.log(this)   //this gives the whole object....we call it current context
    }
}

console.log(user.username)
console.log(user.getUserDetails())
 console.log(this) //gives empty parethesis but this global cntexxt changes when u do it in the browser in inpect's consol we ge window objwct, which is a global object that has lots of things.


 //const promiseOne = new Promise() //A new keyord helps in making of a new context and we call it  constructor funtion.

 function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`welcome ${this.username}`)
    }

    return this

 }

 const userOne = User("komal", 12, true);
 const userTwo = User("star", 33, false)

 console.log(userOne) //niw this gives "star" as username nd that is bcz userTwo variable is overriding it
 //but if we use 'new' keyword then it won't override.

  const userOne1 = new User("komal", 12, true);
 const userTwo2 = new  User("baker", 4, false)
  console.log(userOne1)