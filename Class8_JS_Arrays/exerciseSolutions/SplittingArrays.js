// Exercise 1: sliceArrayFromStart
// This function should take in an array and a count as parameters.
// It should return a new array containing the specified number of elements from the start of the original array.
function sliceArrayFromStart(array, count) {
  return array.slice(0, count);
}

console.log(sliceArrayFromStart(["a", "b", "c", "d", "e"], 3)); // Expected output: ['a', 'b', 'c']
console.log(sliceArrayFromStart([1, 2, 3, 4, 5], 2)); // Expected output: [1, 2]
console.log(sliceArrayFromStart(["x", "y", "z"], 1)); // Expected output: ['x']
console.log(sliceArrayFromStart(["apple", "banana", "cherry", "date"], 0)); // Expected output: []

// Exercise 2: sliceArrayFromEnd
// This function should take in an array and a count as parameters.
// It should return a new array containing the specified number of elements from the end of the original array.
function sliceArrayFromEnd(array, count) {
  return array.slice(array.length - count);
}

console.log(sliceArrayFromEnd(["a", "b", "c", "d", "e"], 2)); // Expected output: ['d', 'e']
console.log(sliceArrayFromEnd([1, 2, 3, 4, 5], 3)); // Expected output: [3, 4, 5]
console.log(sliceArrayFromEnd(["x", "y", "z"], 1)); // Expected output: ['z']
console.log(sliceArrayFromEnd(["apple", "banana", "cherry", "date"], 0)); // Expected output: []

// Exercise 3: spliceArrayFromStart
// This function should take in an array and a count as parameters.
// It should modify the original array by removing the specified number of elements from the start.
function spliceArrayFromStart(array, count) {
  array.splice(0, count)
}

const array1 = ["a", "b", "c", "d", "e"];
spliceArrayFromStart(array1, 2);
console.log(array1); // Expected output: ['c', 'd', 'e']

const array2 = [1, 2, 3, 4, 5];
spliceArrayFromStart(array2, 3);
console.log(array2); // Expected output: [4, 5]

const array3 = ["x", "y", "z"]
spliceArrayFromStart(array3, 1);
console.log(array3); // Expected output: ['y', 'z']

const array4 = ["apple", "banana", "cherry", "date"]
spliceArrayFromStart(array4, 3);
console.log(array4); // Expected output: ['date']

// Exercise 4: spliceArrayFromEnd
// This function should take in an array and a count as parameters.
// It should modify the original array by removing the specified number of elements from the end.
function spliceArrayFromEnd(array, count) {
  array.splice(array.length - count, count)
}

const array5 = ["a", "b", "c", "d", "e"];
spliceArrayFromEnd(array5, 2);
console.log(array5); // Expected output: ['a', 'b']

const array6 = [1, 2, 3, 4, 5];
spliceArrayFromEnd(array6, 3);
console.log(array6); // Expected output: [1, 2]

const array7 = ["x", "y", "z"];
spliceArrayFromEnd(array7, 1);
console.log(array7); // Expected output: ['x', 'y']

const array8 = ["apple", "banana", "cherry", "date"];
spliceArrayFromEnd(array8, 1)
console.log(array8); // Expected output: ['apple', 'banana', 'cherry']

// Exercise 5: sliceAndSplice
// This function should take in an array, two indices (start and end) for slicing, and optional elements to splice.
// It should return a new array that is the result of slicing the original array and splicing the additional elements at the specified indices.
function sliceAndSplice(array, start, end, ...elements) {
  let result = array.slice();
  result.splice(start, end - start, ...elements);
  return result;
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
  array.splice(startIndex, deleteCount, replacement);
}

const array9 = ["apple", "banana", "cherry", "date"];
spliceAndReplace(array9, 1, 2, "mango");
console.log(array9); // Expected output: ['apple', 'mango', 'date']
const array10 = ["cat", "dog", "elephant", "fox", "giraffe"];
spliceAndReplace(array10, 3, 0, "lion");
console.log(array10); // Expected output: ['cat', 'dog', 'elephant', 'lion', 'fox', 'giraffe']

const array11 = [1, 2, 3, 4, 5]
spliceAndReplace(array11, 2, 1, "x")
console.log(array11);
// Expected output: [1, 2, 'x', 4, 5]

const array12 = ["x", "y", "z"]
spliceAndReplace(array12, 1, 1, "a", "b")
console.log(array12);
// Expected output: ['x', 'a', 'b', 'z']

// Exercise 7: sliceAndConcat
// This function should take in two arrays, a start index, and a number of elements to remove.
// It should modify the first array by removing the specified number of elements starting from the specified index,
// and then concatenate the second array to the modified first array. Return the result
function spliceAndConcat(array1, array2, startIndex, deleteCount) {
  array1.splice(startIndex, deleteCount);
  return array1.concat(array2);
}

const array13 = ["a", "b", "c", "d", "e"];
const array14 = [1, 2, 3, 4, 5];
console.log(spliceAndConcat(array13, array14, 2, 2)); // Expected output: ['a', 'b', 'e', 1, 2, 3, 4, 5]
 

const array15 = ["x", "y", "z"]
const array16 = ["apple", "banana", "cherry", "date"]
console.log(spliceAndConcat(array15, array16, 1, 1)); // Expected output: ['x', 'z', 'apple', 'banana', 'cherry', 'date']


// Exercise 8: splitAndRemove
// This function should take in an array, a start index, and a number of elements to remove.
// It should split the original array into two parts at the specified index,
// remove the specified number of elements from the second part
// .
function splitAndRemove(array, startIndex, deleteCount) {
  const firstPart = array.slice(0, startIndex);
  const secondPart = array.slice(startIndex);
  secondPart.splice(0, deleteCount);
  return [firstPart, secondPart];
}

console.log(splitAndRemove(["a", "b", "c", "d", "e"], 2, 2));
// Expected output: [['a', 'b'], [ 'e' ]]
console.log(splitAndRemove([1, 2, 3, 4, 5], 0, 3));
// Expected output: [ [], [ 4, 5 ] ]
console.log(splitAndRemove(["x", "y", "z"], 1, 1));
// Expected output: [ [ 'x' ], [ 'z' ] ]
console.log(splitAndRemove(["apple", "banana", "cherry", "date"], 3, 1));
// Expected output: [ [ 'apple', 'banana', 'cherry' ], [] ]
