class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }

}

const chai = new Teacher("komi", "komi@Teacher.com", "123") //this code won't work without a ne keyword

chai.addCourse()

//let's try with another one:

const masala = new User("masalaHere")

masala.logMe()


//let's check if the above two objects equal to eachother:
console.log(chai === masala); //false
console.log(chai === Teacher) //false

console.log(chai instanceof User); //true bcz it truly is the instance
console.log(chai instanceof Teacher); //true also