class User { 
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Ussername: ${this.username}`);
    }
     static createId(){
        return `123`
    }
}

const komi = new User("Komiii")

//console.log(komi.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")

iphone.logMe();
//console.log(iphone.createId())        //when u uncomment this and try to run this line of code, u will see that it will give u an error bcz createId is static
