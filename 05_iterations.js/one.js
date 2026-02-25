//for loop:
for(let i = 0; i <= 10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number"); //this will be printed when index reaches 5
    }
    console.log(element); //this line gives no error because element is defined in its scope
}

//console.log(element); //this line gives an error because element is not in its scope

//nested for loops:
for(let i = 1; i<=10; i++){
    console.log(`outer loop value: ${i} boooooooooooooom`); //I wrote boooooom so you can find it in the output
    for(let j = 1; j<= 10; j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}


//iterating a loop through an array:
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length); //this gives 3 because we have three elemenets in our array

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}
//output: 
        // flash
        // batman
        // superman



 //keyword break and continue:
 for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected by 5`);
        break; //here break simpy means that after executing above line just come out of this loop
    }
    console.log(`value of i is${index}`);
 }       

 //so what if I have used break in a nested loop?
 //let's see:
 for(let i = 0; i <=10; i++){
    console.log(`first loop's: ${i}`);

    // if(i == 2){
    //     console.log(`oopsieee, it is 3 here`); //yes, when 3 index comes the outerloop will break so the inner loop breaks automatically
    //     break;
    // }

    for(let j = 0; j <= 5; j++){
        console.log(`this inner loop executes 6 times for each time of outer loop ${i}`);
        
    //      if(i == 2){
    //     console.log(`oopsieee, it is 3 here`); //here, for index 2 of outer loop the inner loop breaks and returns to outer loop
    //     break;
    // }

     if(j == 2){
        console.log(`oopsieee, it is 3 here`); // Because of this the inner loop will stop executing after reaching to the index 3 but will return back to the outer loop
        break;
    }
    }
 }


 //continue:

 for(let index =1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue; //this would simply skip to run the loop for index 5. The above line will be executed `Detected 5` but the line outside this if wouldn't be executed for index 5 but rest of the loop will continue
    }
    console.log(`value of i is ${index}`);
 }