// tuple
let user: [number, string] = [1, 'Chris'] // if you were to add a third item to the array, you would get error
// user.push(1) // push exposes a gap in TS. restrict Tuples to 2 values

// enum
// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large} //it automatically assigns values as 0,1,2, etc but can be changed by adding Small = 2 and it would continue as 2,3,4, etc. You can also set the value as a string, but you have to explicitly set all values if you do that
let mySize: Size = Size.Medium;
console.log(mySize)

// setting your enum as a const creates a more optimized code

//the code for enum is const enum <name of type you want created> { array of subtypes }