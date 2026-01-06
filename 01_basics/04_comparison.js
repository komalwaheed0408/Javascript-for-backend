//simple comparisons:
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//for different datatypes, types conversion automatically occurs:
console.log("2" > 1);
console.log("02" > 1);

// the reason is that an equality check == and comparisons > <>= <= work differently
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.
//there is confusion between these comparisons for null and undefined, due to which we have typescript
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



//strict check === means no conversion should occur, bcz earlier we could onl check the value hence datatypes were automatically converted
//but in case of strict check they see if the datatypes are differet so it respects it and doesn't change it
console.log("2" === 2);