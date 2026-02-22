// Why use switch instead of if...else?

// 1️⃣ Use switch when checking ONE variable
//    against MANY fixed exact values (===).

// switch is cleaner and easier to read
// when there are many possible cases.

// Example:
// switch(role) {
//   case "admin":
//   case "user":
//   case "guest":
// }


// ❌ Do NOT use switch when:
// - You need ranges (age > 18)
// - You have complex conditions
// - You compare different variables


// Simple Rule:
// Fixed value matching  →  switch
// Logic / ranges        →  if...else




///////////////////////////////////////////////////////////////////////

//This is how the syntax looks like:

// switch (key) {
//     case value:
//         //console...
//         break;

//     default:
//         break;

// }


//const month; In JavaScript, const must be initialized immediately. You cannot declare it without giving it a value. So this is invalid

// const → declare + assign together
// let → can declare first, assign later

const month = "march";

switch (month){
    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("feb");
        break;  
        
    case "march":
        console.log("march");
        break;
        
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}