//does forEach return any value? No! it doesn't. Let's check:
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    console.log(item); //this would behaae like normal and show output
    return item; //but this return undefined
})

console.log(values); //this will give: undefined

//since forEach never returns anything, as we put the forEach line in a variable and then we printed it but gives undefiend.
//so does that make forEach useless, because most of the time we don't need to print the items of array but perform soemthing on it for which we want it to to return a value
//so what's the point?

//so just like forEach which is a methos of an array, we also have filter, it also takes a callback:
//in this callback function each value of an array will be accessed but on the basis of our codition it will return value/values:
//let's take an example of an array that has numbers, as it will help in better understanding:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => 

    num > 4

)

console.log(newNums); //gives: [ 5, 6, 7, 8, 9, 10 ]

//When you use { }, you must write return:
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => { 

 return   num > 4 
}
)

console.log(newNums1); //gives: [ 5, 6, 7, 8, 9, 10 ] 
//if you remove the word return from above function but leave the curly braces as it is then output will be:  []

//well, if you want, we can do the same thing wiht forEach also as we did with filter, bu the thing is we will have to use another emtpy array and dtore the values > 4 in this new array
//because, forEach doesn't return array but filter returns an array:
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = [];

myNums2.forEach ((num) => {

    if(num > 4){
        newNums2.push(num);
    }
})

console.log(newNums2); //gives perfect output just like filter did: [ 5, 6, 7, 8, 9, 10 ]




//The type of data we get from database is in the form of objects inside the array, so:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let's print those books (objects) that has genre = history:
  let userBooks = books.filter((bo) => bo.genre === 'History');
 // console.log(userBooks)

  //output:
            //   [
            //   {
            //     title: 'Book Three',
            //     genre: 'History',
            //     publish: 1999,
            //     edition: 2007
            //   },
            //   {
            //     title: 'Book Seven',
            //     genre: 'History',
            //     publish: 1986,
            //     edition: 1996
            //   }
            // ]



 //Now, let's print those objects which books are published afetr 2000: so if we use the same variable 'userBooks'
 //Then we don't need to declare it because it has been already declared, so:
 userBooks = books.filter((bo) => {bo.publish >= 2000})
 console.log(  userBooks);  //again this gives: [] because we haven't used 'return' keyword when using curly braces.
 //whenever you open a scope (using curly braces), u need to explicity return 
 //so:
  userBooks = books.filter((bo) => {
    return bo.publish >= 2000})
 console.log(  userBooks) 
 //output:
            // [
            //   {
            //     title: 'Book Five',
            //     genre: 'Science',
            //     publish: 2009,
            //     edition: 2014
            //   },
            //   {
            //     title: 'Book Eight',
            //     genre: 'Science',
            //     publish: 2011,
            //     edition: 2016
            //   }
            // ]
            

//Now, if I want a book published after 1995 and its genre should be History

userBooks = books.filter((bo) => {
    return bo.publish > 1995 && bo.genre === 'History'
})
console.log(  userBooks) 

//output:
            // [
            //   {
            //     title: 'Book Three',
            //     genre: 'History',
            //     publish: 1999,
            //     edition: 2007
            //   }
            // ]