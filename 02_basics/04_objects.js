//Now, we will see how we create object through singleton or a constructor:
const tinderUser1 = new Object(); //a singleton object
const tinderUser2 = {}; //not a singleton object

//Every time you write {}, JavaScript creates a new object.

// A real singleton means:
// The object is created only once.
// Everyone uses that same object.
// For example:
// const settings = new Object();
// // Later...
// const appSettings = settings;
// const userSettings = settings;
// console.log(appSettings === userSettings); // true
// Both variables point to the same object.

    
console.log(tinderUser1); //gives: {}
console.log(tinderUser2); //gives: {}


tinderUser1.id= "123456";
tinderUser1.name = "Komalbro";
tinderUser1.isLoggedIn = false;
console.log(tinderUser1); //gives:  { id: '123456', name: 'Komalbro', isLoggedIn: false }

//making another object (nested object):
const regularUser = {
    email: "Khan123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Komal",
            lastname: "waheed"
        }
    }
}
console.log(regularUser.fullname); //gives: { userfullname: { firstname: 'Komal', lastname: 'waheed' } }
console.log(regularUser.fullname.userfullname.firstname); //gives: Komal

//But what if fullname doesn't exist? Then we use a question mark '?' we use this syntax when wroking on API response

console.log(regularUser.fullname?.userfullname?.firstname);

// Now what happens?
// If fullname is:
// ✅ present → it continues normally
// ❌ undefined → it stops immediately and returns undefined
// 🚫 No error thrown
// ?. means:
// “If this exists, continue… otherwise stop safely.”

//Now, to merge objects we do it just like how we did it for arrays:
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {obj1, obj2};
console.log(obj3); //gives: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//but the correct way is: (mostly used):
const obj4 = {...obj1, ...obj2};
console.log(obj4); //gives: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//another way:
const obj5 = Object.assign(obj1, obj2);
// Here:
// obj1 is the target
// obj2 is the source
// 👉 Object.assign() copies properties of obj2 into obj1
// So:
// obj1 gets modified ⚠
// obj5 is just a reference to obj1
// So after this:
// obj1 === obj5   // true
// They are the SAME object in memory.
console.log(obj1); //gives: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } since obj1 will be modified
console.log(obj5); //gives: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//but:


const obj6 = Object.assign({}, obj1, obj2);
// Here:
// {} is the target
// obj1 and obj2 are sources
// 👉 Properties are copied into a new empty object
// So:
// obj1 is NOT modified ✅
// obj6 is a brand new object
console.log(obj1); //gives: { '1': 'a', '2': 'b' } but to check this comment the above code because I am modifying the obj1 there
console.log(obj6); //gives: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//usually when data is received in the database, it is in the form of objects inside the array, e.g;
const users = [
    {
        id: 1,
        email: "koaml@gmail.com"
    },
    {
        id: 2, 
        email: "alita@gmail.com"
    },
    {
        id: 3,
        email: "bro@gmail.com"
    }
]
 
console.log(users[1].email); //gives: alita@gmail.com

console.log(tinderUser1); //{ id: '123456', name: 'Komalbro', isLoggedIn: false }
// let's try static methods of objects:
// 👉 All are static methods of the Object constructor.
// Why?
// Because we call them like:
// Object.keys(tinderUser)
// NOT like:
// tinderUser.keys() ❌

console.log(Object.keys(tinderUser1));//[ 'id', 'name', 'isLoggedIn' ] //the output of this would have a datatype of array due to which it will have square brackets
console.log(Object.values(tinderUser1));//[ '123456', 'Komalbro', false ]
console.log(Object.entries(tinderUser1)); //It converts an object into an array of key-value pairs. //[ [ 'id', '123456' ], [ 'name', 'Komalbro' ], [ 'isLoggedIn', false ] ]

//we can also check if there is a specific property in our objects or not, so we will get an answer in boolean: either true or false
console.log(tinderUser1.hasOwnProperty('isLoggedIn')); //gives: true bcz this property exists otherwise it will give false


//////////////////////////////////  OBJECT DESTRUCTURE://////////////////////////
//The destructuring of an array is usually used in React js
const course = {
    coursename: "js in pashto",
    price: "9999",
    courseInstructor: "Komal"
}

//now instead of writing course.courseInstructor everytime we access the properties, we can use curly braces to name it soemthing once then use that:
const{courseInstructor: instructor} = course;

//so now, instead of using this:
console.log(course.courseInstructor); //gives: Komal
//we can write:
console.log(instructor); //gives: Komal

//In React JS, we write like this:
const navbar = ({company}) => {

}
navbar(company = "komal");
//explanation:
// This part: const navbar = ({company}) => { }
// This is a React functional component written as an arrow function.
// navbar → the name of the component.
// ({company}) → this is called destructuring props.
// Props are like inputs you give to a component. Think of it like a function argument
// ({company}) is a shortcut instead of writing props.company. It's like saying:
const Navbar = (props) => {
  const company = props.company;
}

/////////////////////////////////////////////////////////////////////////////

//////////////////////             API              //////////////////////////////////////////////////////
// 1️⃣ What is an API?
// API = Application Programming Interface
// Think of it as a waiter in a restaurant:
// You (the app) tell the waiter (API) what you want (request).
// The waiter goes to the kitchen (server) and brings back your food (response).
// In programming:
// Your app asks the API for some data or to do something.
// The API gives the data back.

// 2️⃣ XML vs JSON
// Before: APIs often sent data in XML (like <name>Komal</name>).
// Now: Almost all APIs use JSON (like {"name":"Komal"})
// Why JSON?
// Easier to read.
// Works in any programming language easily.
// Smaller and faster than XML.

// 3️⃣ How APIs work
// You send a request to an API (like asking Google Maps for directions).
// API checks:
// Authentication (is this request allowed? API key, token, etc.)
// Authorization (can you do this action?)
// API sends response (the data you asked for).
// 💡 You don’t worry about how Google checks your username/password. That’s handled by the API behind the scenes. You just provide your API key or token.

// 1️⃣ What is an API key or token?
// Think of it like a special password—but only for apps, not you personally.
// It tells the API who is asking for the data.
// It grants permission to use the API (like a ticket to enter a ride).
// Without it, most APIs won’t give you any data.

// 💡 Example:
// If your app wants to get Google Maps directions, Google needs to know which app is asking.
// You provide the API key.
// Google checks the key → “Ah yes, this app is allowed → here’s the map data.”

// 1️⃣ What the API key actually is
// An API key is just a long string of letters and numbers.
// Example:
// AIzaSyD3fG4H6k9X2q7wE1rY0

// It doesn’t contain your password.
// It is unique to your app.
// The API server (like Google, OpenWeather, etc.) recognizes it and says: “Ah, this is a valid app. I’ll give data.”]

// 3️⃣ How you get it
// You register your app with the service (like Google Cloud, OpenWeather).
// The service generates an API key.
// You put that string in your code when making requests.
// Think of it like a library card:
// The card itself isn’t your full identity, but the library recognizes it and lets you borrow books.
// Without the card → no access.


//An API is usally just like an object in javascript. it is just that it won't have a variable name, and the key and value both are strings:
// {
//     "name": "komal",
//     "coursename": "AI"
//     "price": "free"
// }

//Sometimes, API is in the form of an array. An array will have objects in it
// {
//     {},
//     {},
//     {}
// }

//To understand a real API, go to randomuser.me and fromthere copy the link (an API) https://randomuser.me/api/ and that will give u API object like json format code. Ther go to json formatter and try to see that code in different formats by pasting it there
