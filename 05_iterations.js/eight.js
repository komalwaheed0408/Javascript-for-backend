//Another method that can be used for arrays, it is reduce:

// reduce() in JavaScript:
// reduce() is used to take all array values and make them into one single value.

// Like:
// sum of numbers
// total price
// one combined result

// Example (sum of numbers):

const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);  //for only first time the acc gets the initial value here we passed 0 after that the result of acc + curr gets stored in the acc for everytime the loop runs.

console.log(total); // 10

// What are these?
// acc → accumulator (stores result)
// curr → current value
// 0 → starting value


//Let's practice another example where we store initial value for accumulator in a variable and then pass tha variable to the accumulator to get its first time value:

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial); //10


//If you want to see the values of accumulator and current value, each time so we can simply use a console.log here:
const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal);

//output:
        // acc: 0 and currval: 1
        // acc: 1 and currval: 2
        // acc: 3 and currval: 3
        //6




//Now, let's try the same thing as above but tht initial value of accumulator = 3:
const myNums2 = [1, 2, 3];
const myTotal2 = myNums2.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 3)

console.log(myTotal2);        

//output:
        // acc: 3 and currval: 1
        // acc: 4 and currval: 2
        // acc: 6 and currval: 3
        // 9



//We mostly see developers using a shortest one line version of this by skipping the keyword 'return'

const nummy = [1, 2, 3];
const myTotally = nummy.reduce ((acc, curr) => acc + curr, 0);
console.log(myTotally); //gives: 6


//This concept is usually used for shopping cart:
const shoppingCart = [
        {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); //gives: 22996