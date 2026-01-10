const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
//if u convert somehing to a string then u can also check its length:
console.log(balance.toString().length);

//toFixed tells this many digits after decimal point:
console.log(balance.toFixed(4));
//or
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toFixed(2)); //it rounds it off to 2 decimal points
console.log(otherNumber.toFixed(0)); //it rounds it off to 0 decimal points

//toPrecision tells total number of digits: (but ofc it rounds it off too if needed)
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //it adds commas according to locale

console.log(hundreds.toLocaleString("en-IN")); //Indian style commas

//++++++++++++++++++++++++++ Math Object+++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //absolute value: it simply flips the sign to get 4
console.log(Math.round(4.6)); //Math.round() accepts only one argument—the number to round (here, 4.6).
console.log(Math.round(5.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
//min method of Math object: it gives the input number which is the smallest among all inputs
console.log(Math.min(4, 3, 6, 8));
//max method of Math object: it gives the input number which is the largest among all inputs
console.log(Math.max(4, 3, 6, 8, 98, 100));
console.log(Math.max(4, 3, 6, 8));
//Math.random() method: it gives random number between 0 to 1(excluding 1)
console.log(Math.random());

//to get random number between 0 to 9:  since when we multiply by 10 then max becomes 10(excluding 10) and min remains 0
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random()*10) + 1); //to get random number between 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to get random number between min and max(inclusive). Those min and max that we defined above.