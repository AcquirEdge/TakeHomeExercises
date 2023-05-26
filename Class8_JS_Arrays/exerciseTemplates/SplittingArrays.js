// Exercise 1: sliceArrayFromStart
// This function should take in an array and a count as parameters.
// It should return a new array containing the specified number of elements from the start of the original array.
function sliceArrayFromStart(array, count) {
  // Your code goes here
}

console.log(sliceArrayFromStart(["a", "b", "c", "d", "e"], 3)); // Expected output: ['a', 'b', 'c']
console.log(sliceArrayFromStart([1, 2, 3, 4, 5], 2)); // Expected output: [1, 2]
console.log(sliceArrayFromStart(["x", "y", "z"], 1)); // Expected output: ['x']
console.log(sliceArrayFromStart(["apple", "banana", "cherry", "date"], 0)); // Expected output: []

// Exercise 2: sliceArrayFromEnd
// This function should take in an array and a count as parameters.
// It should return a new array containing the specified number of elements from the end of the original array.
function sliceArrayFromEnd(array, count) {
  // Your code goes here
}

console.log(sliceArrayFromEnd(["a", "b", "c", "d", "e"], 2)); // Expected output: ['d', 'e']
console.log(sliceArrayFromEnd([1, 2, 3, 4, 5], 3)); // Expected output: [3, 4, 5]
console.log(sliceArrayFromEnd(["x", "y", "z"], 1)); // Expected output: ['z']
console.log(sliceArrayFromEnd(["apple", "banana", "cherry", "date"], 0)); // Expected output: []

// Exercise 3: spliceArrayFromStart
// This function should take in an array and a count as parameters.
// It should modify the original array by removing the specified number of elements from the start.
function spliceArrayFromStart(array, count) {
  // Your code goes here
}

const array1 = ["a", "b", "c", "d", "e"];
spliceArrayFromStart(array1, 2);
console.log(array1); // Expected output: ['c', 'd', 'e']

const array2 = [1, 2, 3, 4, 5];
spliceArrayFromStart(array2, 3);
console.log(array2); // Expected output: [4, 5]
console.log(spliceArrayFromStart(["x", "y", "z"], 1)); // Expected output: ['y', 'z']
console.log(spliceArrayFromStart(["apple", "banana", "cherry", "date"], 4)); // Expected output: ['date']

// Exercise 4: spliceArrayFromEnd
// This function should take in an array and a count as parameters.
// It should modify the original array by removing the specified number of elements from the end.
function spliceArrayFromEnd(array, count) {
  // Your code goes here
}

const array3 = ["a", "b", "c", "d", "e"];
spliceArrayFromEnd(array3, 2);
console.log(array3); // Expected output: ['a', 'b']

const array4 = [1, 2, 3, 4, 5];
spliceArrayFromEnd(array4, 3);
console.log(array4); // Expected output: [1, 2]
console.log(spliceArrayFromEnd(["x", "y", "z"], 1)); // Expected output: ['x', 'y']
console.log(spliceArrayFromEnd(["apple", "banana", "cherry", "date"], 1)); // Expected output: ['apple', 'banana', 'cherry']

// Exercise 5: sliceAndSplice
// This function should take in an array, two indices (start and end) for slicing, and optional elements to splice.
// It should return a new array that is the result of slicing the original array and splicing the additional elements at the specified indices.
function sliceAndSplice(array, start, end, ...elements) {
  // Your code goes here
}

console.log(sliceAndSplice(["a", "b", "c", "d", "e"], 1, 3, "x", "y"));
// Expected output: ['a', 'x', 'y', 'e']
console.log(sliceAndSplice([1, 2, 3, 4, 5], 2, 4, 6, 7));
// Expected output: [1, 2, 6, 7, 5]
console.log(sliceAndSplice(["x", "y", "z"], 0, 1, "a"));
// Expected output: ['a', 'y', 'z']
console.log(sliceAndSplice(["apple", "banana", "cherry", "date"], 1, 2));
// Expected output: ['apple', 'banana', 'date']

// Exercise 6: spliceAndReplace
// This function should take in an array, a start index, a number of elements to remove, and a replacement element.
// It should modify the original array by removing the specified number of elements starting from the specified index,
// and replace them with the provided replacement element.
function spliceAndReplace(array, startIndex, deleteCount, replacement) {
  // Your code goes here
}

const array5 = ["apple", "banana", "cherry", "date"];
spliceAndReplace(array5, 1, 2, "mango");
console.log(array5); // Expected output: ['apple', 'mango', 'date']
const array6 = ["cat", "dog", "elephant", "fox", "giraffe"];
spliceAndReplace(array6, 3, 0, "lion");
console.log(array6); // Expected output: ['cat', 'dog', 'elephant', 'lion', 'fox', 'giraffe']
console.log(spliceAndReplace([1, 2, 3, 4, 5], 2, 1, "x"));
// Expected output: [1, 2, 'x', 4, 5]
console.log(spliceAndReplace(["x", "y", "z"], 1, 1, "a", "b"));
// Expected output: ['x', 'a', 'b', 'z']

// Exercise 7: sliceAndConcat
// This function should take in two arrays, a start index, and a number of elements to remove.
// It should modify the first array by removing the specified number of elements starting from the specified index,
// and then concatenate the second array to the modified first array.
function sliceAndConcat(array1, array2, startIndex, deleteCount) {
  // Your code goes here
}

const array7 = ["a", "b", "c", "d", "e"];
const array8 = [1, 2, 3, 4, 5];
sliceAndConcat(array7, array8, 2, 2);
console.log(array7); // Expected output: ['a', 'b', 3, 4, 5]
console.log(
  sliceAndConcat(["x", "y", "z"], ["apple", "banana", "cherry", "date"], 1, 1)
);
// Expected output: ['x', 'cherry', 'date', 'y', 'z']

// Exercise 8: splitAndRemove
// This function should take in an array, a start index, and a number of elements to remove.
// It should split the original array into two parts at the specified index,
// remove the specified number of elements from the second part, and return a new array with both parts.
function splitAndRemove(array, startIndex, deleteCount) {
  // Your code goes here
}

console.log(splitAndRemove(["a", "b", "c", "d", "e"], 2, 2));
// Expected output: [['a', 'b'], 'e']
console.log(splitAndRemove([1, 2, 3, 4, 5], 0, 3));
// Expected output: [[], 4, 5]
console.log(splitAndRemove(["x", "y", "z"], 1, 1));
// Expected output: [['x'], 'z']
console.log(splitAndRemove(["apple", "banana", "cherry", "date"], 3, 1));
// Expected output: [['apple', 'banana', 'cherry'], 'date']
