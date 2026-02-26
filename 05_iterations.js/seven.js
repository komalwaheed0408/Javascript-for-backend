//we can also use another method of array 'map': 
//let's use map and add 10 to each value in the array:
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers.map ((num) => num + 10)
console.log(newNums);

//output: 
            // [
            //   11, 12, 13, 14, 15,
            //   16, 17, 18, 19, 20 
            // ]


 //If you do the same thing as above but open a scope then you must use return keyword:
 const myNumers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNumers.map ((num) => { return num + 10} )
console.log(newNums1);
  // output: 
        //[
        //   11, 12, 13, 14, 15,
        //   16, 17, 18, 19, 20
        // ]

        //If you noticed, in filter only those whose condition is true will be returned, but in map, we are not filtering but operated on each element and still it returned the array




//Now, let's see chaining through using map:
//So, basically we will use .map.map etc: using map multiple times. The question arises about, what will be passed to second time using map?
//So, let's say in firstime we used map, we are mutiplying each value of array [1, 2, 3] with 10 so it returns [10, 20, 30] then the second time we used map will get this returned array from first time, and will apply its operation on it 
//to return another array, this is how chaining occurs:

const chaining  = myNumers.map((num) => num* 10)
                          .map ((num) => num+1);

console.log(chaining);
//output: 
            // [
            //   11, 21, 31, 41,  51,
            //   61, 71, 81, 91, 101
            // ]

//so basically, it will first multiply each element with 10 and then add 1 thus gives above output.

//Now, you are not limited to chain with just map, you can also do chaining with filter:
//Let's use map and filter together, in the form of chaining:

const chaining1 =  myNumers.map((num) => num* 10)
                          .map ((num) => num+1)
                          .filter((num) => num >= 40);
                

console.log(chaining1);

//output:
            // [
            //   41, 51,  61, 71,    
            //   81, 91, 101
            // ]