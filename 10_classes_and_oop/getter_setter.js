class User {
    constructor (email, password){
        this.email = email;
        this.password = password
    }

    //getter for password:
    get password (){
        return this._password.toUpperCase() //this line will give exact same password but in ppercase, but we want the password to not be accessed in its pure for rather we expect like an ecrypted password so:
        return `${this._password}komal` 
    }

    //setter for passwrd:
    set password (value){
        this._password = value.toUpperCase()
    }

    get email () {
        return this._email.toUpperCase()
    }

    set email(value) {
        return this._email = value
    }
}

const komal = new User("komi@komal.ai", "123")
console.log(komal.password);
 console.log(komal.email);