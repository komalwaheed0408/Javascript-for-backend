const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); //the variable from paranthesis would give the keys only but object[variable] gives the values
}
//ouput:
            // js shortcut is for javascript
            // cpp shortcut is for C++
            // rb shortcut is for ruby
            // swift shortcut is for swift by apple



//Now let's use for-in loop for an array and then for map:

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming){
    console.log(programming[key]);
}
//ouput:
            // js
            // rb
            // py
            // java
            // cpp


const map =new Map()
map.set('IN', "India")
map.set('USA', "United Sates of America");
map.set('Fr', "France");
map.set('IN', "India");

for(const key in map){
    console.log(key);
}
//output:
//No, ouput will be shown because map is no iterable through for in loop.
//But actually we always prefer to use foreach loop for array which is  by default parameter for arrays.
