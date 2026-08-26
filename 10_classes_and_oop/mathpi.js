// console.log(Math.PI); //gives: 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI)  //also gives: 3.141592653589793 Since we can't change PI vale like this.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

//console.log(descripter) //this will give description of pi value.

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function (){
        console.log("chai not made");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai)); //this givs undefined bcz chai is not a property so:

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

//since chai is our own object with its properties so we can control the description of it: 
Object.defineProperty(chai, 'name', { 
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries (chai)) { 
    //we will use an if-else condition so that we don't print th function but just the key and value. Because the function is no just a single value.

    if (typeof value !== 'function') 
    { 
          console.log(`${key} : ${value}`)
    }
}