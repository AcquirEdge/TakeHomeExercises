// Exercise 1: Write a function that takes a name and returns a greeting. 
// If no name is given, it should default to 'Guest'
function greet(name = "World") {
    return "Hello " + name;
}

// Sample invocations:
// console.log(greet('John')); // Expected output: 'Hello, John!'
// console.log(greet()); // Expected output: 'Hello, Guest!'

// Exercise 2: Write a function that creates a rectangle object. 
// The function should take length and width parameters, 
// but if they're not provided, they should default to 1
function createRectangle(length = 1, width = 1) {
    return {
        length: length, 
        width: width
    }
}

// Sample invocations:
// console.log(createRectangle(3, 4)); // Expected output: {length: 3, width: 4}
// console.log(createRectangle()); // Expected output: {length: 1, width: 1}

// Exercise 3: Write a function that calculates the power of a number. 
// The function should take the base and the exponent as parameters. 
// If the exponent is not provided, it should default to 2
function power(base, exponent = 2) {
    return base ** exponent;
}

// Sample invocations:
// console.log(power(2, 3)); // Expected output: 8
// console.log(power(3)); // Expected output: 9
