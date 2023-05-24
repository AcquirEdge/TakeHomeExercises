// ExceptionHandling.js

// Exercise 1: Write a function that throws an error if the argument is less than 0
function checkPositive(number) {
    // implement your code here
}

// Sample invocations:
// console.log(checkPositive(1)); // Expected output: 1
// console.log(checkPositive(-1)); // Expected output: Error: 'Number is less than 0'
// console.log(checkPositive(0)); // Expected output: 0
// console.log(checkPositive(100)); // Expected output: 100

// Exercise 2: Write a function that calculates the area of a rectangle. 
// It should throw an error if either length or width is negative
function calculateArea(length, width) {
    // implement your code here
}

// Sample invocations:
// console.log(calculateArea(3, 4)); // Expected output: 12
// console.log(calculateArea(-3, 4)); // Expected output: Error: 'Dimensions should be positive'
// console.log(calculateArea(3, -4)); // Expected output: Error: 'Dimensions should be positive'
// console.log(calculateArea(5, 5)); // Expected output: 25

// Exercise 3: Write a function that divides two numbers but throws an error if the denominator is 0
function safeDivide(numerator, denominator) {
    // implement your code here
}

// Sample invocations:
// console.log(safeDivide(10, 2)); // Expected output: 5
// console.log(safeDivide(10, 0)); // Expected output: Error: 'Cannot divide by zero'
// console.log(safeDivide(15, 3)); // Expected output: 5
// console.log(safeDivide(8, 2)); // Expected output: 4

// Exercise 4: Write a function that logs a number if it is positive, but throws an error if it's negative
function logPositive(number) {
    // implement your code here
}

// Sample invocations:
// console.log(logPositive(5)); // Expected output: 5
// console.log(logPositive(-5)); // Expected output: Error: 'Number is negative'
// console.log(logPositive(0)); // Expected output: 0
// console.log(logPositive(10)); // Expected output: 10


// Exercise 5 - The function should take an array and an index as arguments. 
// The function should try to access the element of the array at the provided index and return it. 
// If the index is out of bounds (i.e., the index is less than 0 or greater than or equal to the 
// length of the array), it should catch the error and return "Index out of bounds".

function safeAccess(array, index) {
    // your code here
}

// Sample invocations:
// console.log(safeAccess([1,2,3,4,5], 2)); // expected output: 3
// console.log(safeAccess([1,2,3,4,5], 10)); // expected output: "Index out of bounds"