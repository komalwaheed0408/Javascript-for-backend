//In JavaScript, this refers to the object/context that is currently calling the function.

function SetUsername(username){

    this.username = username;
    console.log("called");

}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chia = new createUser("chia", "chia@gmail.com", "123")

console.log(chia)