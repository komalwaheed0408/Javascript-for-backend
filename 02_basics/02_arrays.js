const marvel_heroes = ["David", "Roshan", "pret"];
const dc_heroes = ["batman", "powerpuff", "Lola"];

//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes); //gives: [ 'David', 'Roshan', 'pret', [ 'batman', 'powerpuff', 'Lola' ] ]
//which means, the push added dc_heroes array as an element in marvel_heroes array

//console.log(marvel_heroes[3][1]); //gives: powerpuff //we used double indexes to tell that whihc element from the second array whcih also is an element

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); //this concatenate the two arrays together but you need to store it in a different variable
