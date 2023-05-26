// Exercise 1: Using push() method to add an element to the end of an array
function addElementToEnd(array, element) {
    // Your code goes here
  }
  console.log(addElementToEnd([1, 2, 3], 4)); // Expected output: [1, 2, 3, 4]
  console.log(addElementToEnd(['a', 'b', 'c'], 'd')); // Expected output: ['a', 'b', 'c', 'd']
  console.log(addElementToEnd([], 'First')); // Expected output: ['First']
  console.log(addElementToEnd([true, false], true)); // Expected output: [true, false, true]
  
  // Exercise 2: Using unshift() method to add an element to the start of an array
  function addElementToStart(array, element) {
    // Your code goes here
  }
  console.log(addElementToStart([1, 2, 3], 0)); // Expected output: [0, 1, 2, 3]
  console.log(addElementToStart(['b', 'c', 'd'], 'a')); // Expected output: ['a', 'b', 'c', 'd']
  console.log(addElementToStart([], 'First')); // Expected output: ['First']
  console.log(addElementToStart([false, true], false)); // Expected output: [false, false, true]
  
  // Exercise 3: Using pop() method to remove the last element from an array
  function removeElementFromEnd(array) {
    // Your code goes here
  }
  console.log(removeElementFromEnd([1, 2, 3])); // Expected output: [1, 2]
  console.log(removeElementFromEnd(['a', 'b', 'c', 'd'])); // Expected output: ['a', 'b', 'c']
  console.log(removeElementFromEnd(['Only'])); // Expected output: []
  console.log(removeElementFromEnd([true, false])); // Expected output: [true]
  
  // Exercise 4: Using shift() method to remove the first element from an array
  function removeElementFromStart(array) {
    // Your code goes here
  }
  console.log(removeElementFromStart([1, 2, 3])); // Expected output: [2, 3]
  console.log(removeElementFromStart(['a', 'b', 'c', 'd'])); // Expected output: ['b', 'c', 'd']
  console.log(removeElementFromStart(['Only'])); // Expected output: []
  console.log(removeElementFromStart([true, false])); // Expected output: [false]
  
  // Exercise 5: Combination of push() and pop() methods 
  function pushThenPop(array, pushElement) {
    // Your code goes here
  }
  console.log(pushThenPop([1, 2, 3], 4)); // Expected output: [1, 2, 3]
  console.log(pushThenPop(['a', 'b', 'c'], 'd')); // Expected output: ['a', 'b', 'c']
  console.log(pushThenPop([], 'First')); // Expected output: []
  console.log(pushThenPop([true, false], true)); // Expected output: [true, false]
  
  // Exercise 6: Combination of unshift() and shift() methods 
  function unshiftThenShift(array, unshiftElement) {
    // Your code goes here
  }
  console.log(unshiftThenShift([1, 2, 3], 0)); // Expected output: [1, 2, 3]
  console.log(unshiftThenShift(['b', 'c', 'd'], 'a')); // Expected output: ['b', 'c', 'd']
  console.log(unshiftThenShift([], 'First')); // Expected output: []
  console.log(unshiftThenShift([false, true], false)); // Expected output: [false, true]
  
  // Exercise 7: Combination of push() and shift() methods 
  function pushThenShift(array, pushElement) {
    // Your code goes here
  }
  console.log(pushThenShift([1, 2, 3], 4)); // Expected output: [2, 3, 4]
  console.log(pushThenShift(['a', 'b', 'c'], 'd')); // Expected output: ['b', 'c', 'd']
  console.log(pushThenShift([], 'First')); // Expected output: ['First']
  console.log(pushThenShift([true, false], true)); // Expected output: [false, true]
  
  // Exercise 8: Combination of unshift() and pop() methods 
  function unshiftThenPop(array, unshiftElement) {
    // Your code goes here
  }
  console.log(unshiftThenPop([1, 2, 3], 0)); // Expected output: [0, 1, 2]
  console.log(unshiftThenPop(['b', 'c', 'd'], 'a')); // Expected output: ['a', 'b', 'c']
  console.log(unshiftThenPop([], 'First')); // Expected output: ['First']
  console.log(unshiftThenPop([false, true], false)); // Expected output: [false, false]

// Exercise 9: Using push(), pop(), unshift() and shift() to manipulate an array
function pushPopUnshiftShift(array, pushElement, unshiftElement) {
    // Your code goes here
  }
  console.log(pushPopUnshiftShift([1, 2, 3], 4, 0)); // Expected output: [0, 1, 2]
  console.log(pushPopUnshiftShift(['b', 'c', 'd'], 'e', 'a')); // Expected output: ['a', 'b', 'c']
  console.log(pushPopUnshiftShift([], 'First', 'Zero')); // Expected output: ['Zero']
  console.log(pushPopUnshiftShift([false, true], true, false)); // Expected output: [false, false]
  
  // Exercise 10: Using shift() twice after using unshift() twice
  function doubleUnshiftDoubleShift(array, element1, element2) {
    // Your code goes here
  }
  console.log(doubleUnshiftDoubleShift([1, 2, 3], 0, -1)); // Expected output: [0, 1, 2, 3]
  console.log(doubleUnshiftDoubleShift(['b', 'c', 'd'], 'a', 'A')); // Expected output: ['a', 'b', 'c', 'd']
  console.log(doubleUnshiftDoubleShift([], 'Second', 'First')); // Expected output: ['Second']
  console.log(doubleUnshiftDoubleShift([true, false], true, false)); // Expected output: [true, false, true]
  
  // Exercise 11: Using pop() twice after using push() twice
  function doublePushDoublePop(array, element1, element2) {
    // Your code goes here
  }
  console.log(doublePushDoublePop([1, 2, 3], 4, 5)); // Expected output: [1, 2, 3, 4]
  console.log(doublePushDoublePop(['a', 'b', 'c'], 'd', 'e')); // Expected output: ['a', 'b', 'c', 'd']
  console.log(doublePushDoublePop([], 'First', 'Second')); // Expected output: ['First']
  console.log(doublePushDoublePop([false, true], true, false)); // Expected output: [false, true, true]
  
  // Exercise 12: Combination of unshift(), push(), shift(), pop() methods
  function unshiftPushShiftPop(array, unshiftElement, pushElement) {
    // Your code goes here
  }
  console.log(unshiftPushShiftPop([1, 2, 3], 0, 4)); // Expected output: [1, 2, 3]
  console.log(unshiftPushShiftPop(['b', 'c', 'd'], 'a', 'e')); // Expected output: ['b', 'c', 'd']
  console.log(unshiftPushShiftPop([], 'First', 'Second')); // Expected output: ['First']
  console.log(unshiftPushShiftPop([false, true], true, false)); // Expected output: [false, true]
    