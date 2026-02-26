const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val){

    console.log(val);

})

//output: 
        // js
        // ruby
        // java
        // python
        // cpp


//you can also use an arrow function: 
coding.forEach((item) => { //since, we don't use the 'function' keyword in an arrow function
    console.log(item);
})        

//Now, let's make a function then call it by reference:
function printMe(item){
    console.log(item);
}

coding.forEach(printMe); //here, we don't use paranthesis when call this function because we want to refer it.
//because we are passing the function itself (reference), not calling it.

// If you write:
// printMe()
// ➡️ That means: “Run the function right now.”


// 🔹 But in:
// coding.forEach(printMe);
// ➡️ That means: “Give this function to forEach, and it will call it for each item.”



//We have 2 more parameters also for forEach that we can use, if the first one gives values (like 'item' did in above cases), 
// second parameter will return the number of indexes, the third one is itself is for returning an entire array.

coding.forEach((item, index, arr) => {
    console.log(item, index, arr); //the 'arr' here will return entire array each time the loop iterated over the elements of an array(check output)
})

//output:
            // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]



 //let's make an array that has objects:
 const  myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

 ]           

 myCoding.forEach((item) => {
    console.log(item.languageName); //this will give you all the language names from all the objects in the array
 })
 //output:
            //  javascript
            // java
            // python


 //what if I want the language name of jsut first object:
 console.log(myCoding[0].languageName);
  //output:
                // javascript          