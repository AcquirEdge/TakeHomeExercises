// Exercise 1: Write a function that takes a variable number of arguments and adds them together
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Sample invocations:
// console.log(sumAll(1, 2, 3)); // Expected output: 6
// console.log(sumAll(5, 5, 5, 5)); // Expected output: 20

// Exercise 2: Write a function that calculates the average of all its arguments
function calculateAverage() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

// Sample invocations:
// console.log(calculateAverage(1, 2, 3, 4, 5)); // Expected output: 3
// console.log(calculateAverage(2, 4, 6)); // Expected output: 4

// Exercise 3: Write a function that multiplies all its arguments together
function multiplyAll(...numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}

// Sample invocations:
// console.log(multiplyAll(1, 2, 3)); // Expected output: 6
// console.log(multiplyAll(5, 5, 2)); // Expected output: 50

// Exercise 4: Write a function that concatenates all its string arguments together
function mergeStrings(...strings) {
    let mergedString = '';
    for (let i = 0; i < strings.length; i++) {
        mergedString += strings[i];
    }
    return mergedString;
}

// Sample invocations:
// console.log(mergeStrings('Hello', 'World')); // Expected output: 'HelloWorld'
// console.log(mergeStrings('This', 'is', 'a', 'test')); // Expected output: 'Thisisatest'

// Exercise 5: Write a function that combines two arrays of numbers.
function addNumbers(array1, array2) {
    return [...array1, ...array2];
}

// Sample invocations:
// console.log(addNumbers([1,2,3], [4,5,6])); // expected output: [1,2,3,4,5,6]
// console.log(addNumbers([7,8,9], [10,11,12])); // expected output: [7,8,9,10,11,12]

// Exercise 6: The function should take two objects as arguments and return a single object that combines all of the properties of the input objects. 
// If the same key exists in both input objects, the value from the second input object should be used. 
function mergeObjects(object1, object2) {
    return {...object1, ...object2};
}

// Sample invocations:
// console.log(mergeObjects({a: 1}, {b: 2})); // expected output: {a: 1, b: 2}
// console.log(mergeObjects({a: 1}, {a: 2})); // expected output: {a: 2}

// Exercise 7: The function should take a string as an argument and return an array of the individual characters in the string.
function spreadString(string) {
    return [...string];
}
// Sample invocations:
// console.log(spreadString('hello')); // expected output: ['h', 'e', 'l', 'l', 'o']
// console.log(spreadString('world')); // expected output: ['w', 'o', 'r', 'l', 'd']