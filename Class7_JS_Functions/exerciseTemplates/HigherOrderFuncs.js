// HigherOrderFuncs.js

// Example functions:
function double(num) {
    return num * 2;
}

function square(num) {
    return num ** 2;
}

function negate(num) {
    return -num;
}

// Exercise 1: Write a function that takes another function as argument and applies it to an array of numbers
function transformNumbers(numbers, func) {
    // implement your code here
}
/*
Sample invocations:
console.log(transformNumbers([1, 2, 3, 4], double)); // Expected output: [2, 4, 6, 8]
console.log(transformNumbers([5, 6, 7, 8], double)); // Expected output: [10, 12, 14, 16]
console.log(transformNumbers([1, 2, 3, 4], square)); // Expected output: [1, 4, 9, 16]
console.log(transformNumbers([5, 6, 7, 8], square)); // Expected output: [25, 36, 49, 64]
console.log(transformNumbers([1, 2, 3, 4], negate)); // Expected output: [-1, -2, -3, -4]
console.log(transformNumbers([-1, -2, -3, -4], negate)); // Expected output: [1, 2, 3, 4]
*/

// Example functions:
function greaterThan(a, b) {
    return a > b;
}

function lessThan(a, b) {
    return a < b;
}

function isEqual(a, b) {
    return a === b;
}

// Exercise 2: Write a function that takes two numbers and a comparison function as an argument. The function should return the result of the comparison function applied to the two numbers.
function compareElements(a, b, func) {
    // implement your code here
}
/*
Sample invocations:
console.log(compareElements(5, 3, greaterThan)); // Expected output: true
console.log(compareElements(3, 5, greaterThan)); // Expected output: false
console.log(compareElements(3, 5, lessThan)); // Expected output: true
console.log(compareElements(5, 3, lessThan)); // Expected output: false
console.log(compareElements(3, 3, isEqual)); // Expected output: true
console.log(compareElements(3, 2, isEqual)); // Expected output: false
*/

// Example functions:
function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function reverse(str) {
    return str.split('').reverse().join('');
}

// Exercise 3: Write a function that takes an array of strings and a function as an argument. The function should return the resulting array after the argument function is applied to each string.
function transformStrings(inputStrings, func) {
    // implement your code here
}
/*
Sample invocations:
console.log(transformStrings(["Hello", "World"], toUpperCase)); // Expected output: ["HELLO", "WORLD"]
console.log(transformStrings(["Foo", "Bar"], toUpperCase)); // Expected output: ["FOO", "BAR"]
console.log(transformStrings(["Hello", "World"], toLowerCase)); // Expected output: ["hello", "world"]
console.log(transformStrings(["Foo", "Bar"], toLowerCase)); // Expected output: ["foo", "bar"]
console.log(transformStrings(["Hello", "World"], reverse)); // Expected output: ["olleH", "dlroW"]
console.log(transformStrings(["Foo", "Bar"], reverse)); // Expected output: ["ooF", "raB"]
*/

// Exercise 4: Write a function that takes a number as an argument and returns a new function. The new function should take a number, multiply it by the first number, then return the result.
function makeMultiplier(num1) {
    // implement your code here
}
/*
Sample invocations:
let doubler = makeMultiplier(2);
console.log(doubler(5)); // Expected output: 10
console.log(doubler(7)); // Expected output: 14

let tripler = makeMultiplier(3);
console.log(tripler(5)); // Expected output: 15
console.log(tripler(7)); // Expected output: 21
*/

// Example functions:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Exercise 5: Write a function that takes a function as an argument and returns a new function. The new function should take two numbers, apply the given function to the two numbers, and return the result.
function createCalculator(func) {
    // implement your code here
}
/*
Sample invocations:
let adder = createCalculator(add);
console.log(adder(5, 3)); // Expected output: 8
console.log(adder(7, 3)); // Expected output: 10

let subtractor = createCalculator(subtract);
console.log(subtractor(5, 3)); // Expected output: 2
console.log(subtractor(7, 3)); // Expected output: 4

let multiplier = createCalculator(multiply);
console.log(multiplier(5, 3)); // Expected output: 15
console.log(multiplier(7, 3)); // Expected output: 21
*/
