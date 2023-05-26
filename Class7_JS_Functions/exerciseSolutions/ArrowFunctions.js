// ArrowFunctions.js

// Exercise 1: Write an arrow function that calculates the square of a number.
let square = (num) => {
    return num**2;
}
/*
Sample invocations:
console.log(square(4)); // Expected output: 16
console.log(square(-3)); // Expected output: 9
*/

// Exercise 2: Write an arrow function that calculates the reciprocal of a number.
let reciprocal = (num) => {
    return 1/num;
}
/*
Sample invocations:
console.log(reciprocal(4)); // Expected output: 0.25
console.log(reciprocal(-2)); // Expected output: -0.5
*/

// Exercise 3: Redo 'transformNumbers' from HigherOrderFuncs.js (you can copy it over)
// Redo all 6 sample invocations, but this time use arrow functions to re-implement the example functions in the console.log statement
function transformNumbers(numbers, func) {
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = func(numbers[i]);
    }
    return numbers;
}
/*
Sample invocations:
console.log(transformNumbers([1, 2, 3, 4], (num) => { return num * 2; })); // Expected output: [2, 4, 6, 8]
console.log(transformNumbers([5, 6, 7, 8], (num) => { return num * 2; })); // Expected output: [10, 12, 14, 16]
console.log(transformNumbers([1, 2, 3, 4], (num) => { return num ** 2; })); // Expected output: [1, 4, 9, 16]
console.log(transformNumbers([5, 6, 7, 8], (num) => { return num ** 2; })); // Expected output: [25, 36, 49, 64]
console.log(transformNumbers([1, 2, 3, 4], (num) => { return -num; })); // Expected output: [-1, -2, -3, -4]
console.log(transformNumbers([-1, -2, -3, -4], (num) => { return -num; })); // Expected output: [1, 2, 3, 4]
*/


// Exercise 4: Redo 'transformNumbers' from HigherOrderFuncs.js (you can copy it over)
// Redo all 6 sample invocations, but this time use arrow functions to re-implement the example functions in the console.log statement
function compareElements(a, b, func) {
    return func(a, b);
}

/*
Sample invocations:
console.log(compareElements(5, 3, (a, b) => { return a > b; })); // Expected output: true
console.log(compareElements(3, 5, (a, b) => { return a > b; })); // Expected output: false
console.log(compareElements(3, 5, (a, b) => { return a < b; })); // Expected output: true
console.log(compareElements(5, 3, (a, b) => { return a < b; })); // Expected output: false
console.log(compareElements(3, 3, (a, b) => { return a === b; })); // Expected output: true
console.log(compareElements(3, 2, (a, b) => { return a === b; })); // Expected output: false
*/


// Exercise 5: Redo 'transformStrings' from HigherOrderFuncs.js (you can copy it over)
// Redo all 6 sample invocations, but this time use arrow functions to re-implement the example functions in the console.log statement
function transformStrings(inputStrings, func) {
    for(let i = 0; i < inputStrings.length; i++){
        inputStrings[i] = func(inputStrings[i])
    }
    return inputStrings;
}
/*
Sample invocations:
console.log(transformStrings(["Hello", "World"], (str) => { return str.toUpperCase(); })); // Expected output: ["HELLO", "WORLD"]
console.log(transformStrings(["Foo", "Bar"], (str) => { return str.toUpperCase(); })); // Expected output: ["FOO", "BAR"]
console.log(transformStrings(["Hello", "World"], (str) => { return str.toLowerCase(); })); // Expected output: ["hello", "world"]
console.log(transformStrings(["Foo", "Bar"], (str) => { return str.toLowerCase(); })); // Expected output: ["foo", "bar"]
console.log(transformStrings(["Hello", "World"], (str) => { return str.split("").reverse().join(""); })); // Expected output: ["olleH", "dlroW"]
console.log(transformStrings(["Foo", "Bar"], (str) => { return str.split("").reverse().join(""); })); // Expected output: ["ooF", "raB"]
*/

// Exercise 6: Write an arrow function that checks if a number is positive.
let isPositive = (num) => {
    return num > 0;
}
/*
Sample invocations:
console.log(isPositive(3)); // Expected output: true
console.log(isPositive(-1)); // Expected output: false
*/

// Exercise 7: Write an arrow function that negates a number.
let negate = (num) => {
    return -num;
}
/*
Sample invocations:
console.log(negate(3)); // Expected output: -3
console.log(negate(-1)); // Expected output: 1
*/
