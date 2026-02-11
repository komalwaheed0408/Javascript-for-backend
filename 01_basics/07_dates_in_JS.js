let myDate = new Date();
console.log(myDate.toString()); //this gives a date-time string (or human-readable date/time). It is not a timestamp.

// Tue Feb 10 2026 → date

// 00:51:39 → time (hours : minutes : seconds)

// GMT+0500 → time zone

// (Pakistan Standard Time) → time zone name

console.log(myDate.toDateString()); //Tue Feb 10 2026 //“Just tell me the day, month, and year.”
console.log(myDate.toLocaleString()); //“Tell me the full date and time the way people in my country read it.”
//Format depends on your country / system settings

console.log(typeof myDate); //object //simce Date is an object

/*
DATE IN JAVASCRIPT — EASY NOTES

1) Date is a built-in constructor in JavaScript.
   When we use it with the `new` keyword, it creates a Date OBJECT.

   Example:
   const d = new Date();

   - `d` is an object
   - We can call methods on it like:
     d.getFullYear()
     d.toDateString()
     d.toLocaleString()

2) Using Date WITHOUT `new` is different.

   Example:
   Date();

   - This does NOT return a Date object
   - It returns a STRING (human-readable date & time)
   - You CANNOT call date methods on it

   Example:
   Date().getFullYear();  // ❌ Error
   new Date().getFullYear(); // ✅ Works

   Rule:
   - new Date()  → Date object
   - Date()      → String

3) In real projects, we almost ALWAYS use:
   new Date()

   Because objects allow:
   - calculations
   - formatting
   - comparisons

4) Date API:
   - The classic Date API is old but still widely used
   - It has some design issues (time zones, mutability)

5) Modern alternative:
   - JavaScript now has a new API called "Temporal"
   - It is cleaner and safer for date/time handling
   - Example:
     Temporal.Now.plainDateTimeISO()

   Note:
   - Temporal is newer
   - Not fully supported everywhere yet
   - Often used with a polyfill

SUMMARY:
- Date → constructor
- new Date() → Date object (use this)
- Date() → string (avoid)
- Temporal → modern date/time API
*/

let myCreatedDate1 = new Date (2026, 1, 10);
console.log(myCreatedDate1.toLocaleString());
// 2023 → year
// 0 → month (January, because months start from 0 😬)
// 23 → day

let myCreatedDate2 = new Date(2026, 1, 10, 5, 3); 
console.log(myCreatedDate2.toLocaleString());
// 2023 → year
// 0 → January
// 23 → day
// 5 → hours
// 3 → minutes
// If you don’t provide time, JavaScript assumes midnight
// If you do provide time, JavaScript uses your values

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());
//This is the ISO format (YYYY-MM-DD)
// ✅ Always works in all browsers consistently
// Interpreted as:
// 14 January 2023, time = 00:00 (midnight)
// Safe to use for creating dates programmatically

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
// This is non-standard format (MM-DD-YYYY)
// ❌ Behavior can be inconsistent across browsers / systems
// Some browsers interpret it as local time, some may fail, or some may swap month/day
// Only safe if you know your environment reliably supports it
console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
// Date.now() is a static method on the Date object
// It returns the current timestamp
// Specifically: milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch)


console.log(Math.floor(Date.now()));
// Date.now() Returns current timestamp in milliseconds
// Math.floor() rounds a number down to the nearest integer
// But Date.now() is already an integer (milliseconds since 1970)

console.log(Math.floor(Date.now()/1000));
// Date.now() Returns current timestamp in milliseconds
// Divide by 1000 Converts milliseconds → seconds (but Still a decimal, not integer)
// Math.floor() Rounds down to nearest whole number
// Removes decimals → now a proper Unix timestamp in seconds
// Many APIs (like JWT tokens, databases, Unix systems) use timestamps in seconds, not milliseconds
// Using Math.floor(Date.now() / 1000) gives you exactly that

let newDate = Date.now();

console.log(newDate); //gives a timestamp


let DayMonth = new Date();
console.log(DayMonth.getMonth()); //1 
console.log(DayMonth.getMonth() + 1); //2
console.log(DayMonth.getDay());
// Returns a number from 0 → 6
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday


//////////////////////////Interpolation://////////////////////////////////////////
// Interpolation = putting variables or expressions inside a string
// Instead of breaking the string and using +, you embed it directly
//e.g;
let name = "Komal";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old`);
//Use backticks + ${expression} to interpolate values in a string.
//Similarly, we can also do with date:
console.log(`here it is: ${DayMonth.getDay()}`); //Note: This only gives the number, not the name of the day.

DayMonth.toLocaleString('default', {weekday: "long"});
// weekday: "long" → gives full weekday name
// 'default' → uses your system’s locale
//let's put it in a vaeiable then print it:
let variable = new Date();
let dayName = variable.toLocaleString('default', {weekday: "long"});
console.log(`Today is ${dayName} and thet ime is ${variable.toLocaleTimeString()}`);

//explanation to above:
// { weekday: "long" } This is called an options object.
// It tells JavaScript:
// “Only show the weekday, and show it in full form.”
// You can also customize it:

newDate.toLocaleString('default', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}); // output: Tuesday, February 11, 2026
//So this method is customizable.

//but toLocaleTimeString():
// Specifically made for time only
// Returns hours, minutes, seconds
// Uses your local format automatically
// It doesn’t require options — but you can pass options if you want.
//e.g;
newDate.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });

// | Method                 | Default Output |
// | ---------------------- | -------------- |
// | `toLocaleString()`     | Date + Time    |
// | `toLocaleDateString()` | Date only      |
// | `toLocaleTimeString()` | Time only      |

// Both toLocaleString() and toLocaleTimeString()
// can take arguments — but none of them require arguments.