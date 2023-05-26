// Exercise 1: joinArrayToString
// This function converts a given array into a string using the JavaScript `join()` method.
function joinArrayToString(array, separator) {
    // Your code goes here
  }
  
  console.log(joinArrayToString(['Hello', 'World'], ' ')); // Expected output: "Hello World"
  console.log(joinArrayToString([1, 2, 3, 4], '-')); // Expected output: "1-2-3-4"
  console.log(joinArrayToString(['a', 'b'], '')); // Expected output: "ab"
  console.log(joinArrayToString([true, false], ', ')); // Expected output: "true, false"
  
  // Exercise 2: joinTwoArrays
  // This function combines two given arrays into one using the JavaScript `concat()` method.
  function joinTwoArrays(array1, array2) {
    // Your code goes here
  }
  
  console.log(joinTwoArrays(['Hello', 'World'], ['Hola', 'Mundo'])); // Expected output: ['Hello', 'World', 'Hola', 'Mundo']
  console.log(joinTwoArrays([1, 2], [3, 4])); // Expected output: [1, 2, 3, 4]
  console.log(joinTwoArrays(['a', 'b'], ['c', 'd'])); // Expected output: ['a', 'b', 'c', 'd']
  console.log(joinTwoArrays([true, false], [false, true])); // Expected output: [true, false, false, true]
  
  // Exercise 3: concatThreeArrays
  // The goal of this function is to join three given arrays into one using the `concat()` method.
  function concatThreeArrays(array1, array2, array3) {
    // Your code goes here
  }
  
  console.log(concatThreeArrays(['Hello', 'World'], ['Hola', 'Mundo'], ['Bonjour', 'Monde'])); // Expected output: ['Hello', 'World', 'Hola', 'Mundo', 'Bonjour', 'Monde']
  console.log(concatThreeArrays([1, 2], [3, 4], [5, 6])); // Expected output: [1, 2, 3, 4, 5, 6]
  console.log(concatThreeArrays(['a', 'b'], ['c', 'd'], ['e', 'f'])); // Expected output: ['a', 'b', 'c', 'd', 'e', 'f']
  console.log(concatThreeArrays([true, false], [false, true], [true, false])); // Expected output: [true, false, false, true, true, false]
  
  // Exercise 4: joinThreeArrays
  // This function is designed to convert three given arrays into a string using the `join()` method.
  function joinThreeArrays(array1, array2, array3, separator) {
    // Your code goes here
  }
  
  console.log(joinThreeArrays(['Hello', 'World'], ['Hola', 'Mundo'], ['Bonjour', 'Monde'], ' ')); // Expected output: "Hello World Hola Mundo Bonjour Monde"
  console.log(joinThreeArrays([1, 2], [3, 4], [5, 6], '-')); // Expected output: "1-2-3-4-5-6"
  console.log(joinThreeArrays(['a', 'b'], ['c', 'd'], ['e', 'f'], '')); // Expected output: "abcdef"
  console.log(joinThreeArrays([true, false], [false, true], [true, false], ', ')); // Expected output: "true, false, false, true, true, false"
  
  // Exercise 5: joinWithShiftedElement
  // This function combines two given arrays into a string after performing some operations on the arrays.
  function joinWithShiftedElement(array1, array2, separator) {
    // Your code goes here
  }
  
  console.log(joinWithShiftedElement(['Hello', 'World'], ['Hola', 'Mundo'], ' ')); // Expected output: "World Hola Hello Mundo"
  console.log(joinWithShiftedElement([1, 2], [3, 4], '-')); // Expected output: "2-3-1-4"
  console.log(joinWithShiftedElement(['a', 'b'], ['c', 'd'], '')); // Expected output: "bcad"
  console.log(joinWithShiftedElement([true, false], [false, true], ', ')); // Expected output: "false, true, true, false"
  
  // Exercise 6: concatWithPoppedElement
  // The purpose of this function is to join two given arrays into one after performing some operations.
  function concatWithPoppedElement(array1, array2) {
    // Your code goes here
  }
  
  console.log(concatWithPoppedElement(['Hello', 'World'], ['Hola', 'Mundo'])); // Expected output: ['Hello', 'World', 'Mundo']
  console.log(concatWithPoppedElement([1, 2, 3], [4, 5, 6])); // Expected output: [1, 2, 3, 5, 6]
  console.log(concatWithPoppedElement(['a', 'b', 'c'], ['d', 'e', 'f'])); // Expected output: ['a', 'b', 'c', 'e', 'f']
  console.log(concatWithPoppedElement([true, false, false], [true, false, true])); // Expected output: [true, false, false, false, true]
  
  // Exercise 7: joinAndUnshift
  // This function combines two given arrays into a string after performing some operations on the arrays.
  function joinAndUnshift(array1, array2, separator, element) {
    // Your code goes here
  }
  
  console.log(joinAndUnshift(['Hello', 'World'], ['Hola', 'Mundo'], ' ', 'Hi')); // Expected output: "Hi Hello Hola World Mundo"
  console.log(joinAndUnshift([1, 2], [3, 4], '-', 0)); // Expected output: "0-1-3-2-4"
  console.log(joinAndUnshift(['a', 'b'], ['c', 'd'], '', 'z')); // Expected output: "zabcdb"
  console.log(joinAndUnshift([true, false], [false, true], ', ', null)); // Expected output: "null, true, false, false, true"
  
  // Exercise 8: concatAndPush
  // The goal of this function is to join two given arrays into one and then add a given element to the end of the final array.
  function concatAndPush(array1, array2, element) {
    // Your code goes here
  }
  
  console.log(concatAndPush(['Hello', 'World'], ['Hola', 'Mundo'], 'Hi')); // Expected output: ['Hello', 'World', 'Hola', 'Mundo', 'Hi']
  console.log(concatAndPush([1, 2], [3, 4], 5)); // Expected output: [1, 2, 3, 4, 5]
  console.log(concatAndPush(['a', 'b'], ['c', 'd'], 'e')); // Expected output: ['a', 'b', 'c', 'd', 'e']
  console.log(concatAndPush([true, false], [false, true], true)); // Expected output: [true, false, false, true, true]
  