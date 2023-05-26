// Exercise 1 - forEach
// Description: Iterate through the given array and log each element to the console using the forEach method.
// Parameters: array (array)
// Returns: undefined

function iterateAndLog(array) {
    // Write your code here
  }
  
  // Sample usage 1
  iterateAndLog([1, 2, 3, 4, 5]);
  // Sample output 1:
  // 1
  // 2
  // 3
  // 4
  // 5
  
  // Sample usage 2
  iterateAndLog(['apple', 'banana', 'cherry']);
  // Sample output 2:
  // 'apple'
  // 'banana'
  // 'cherry'
  
  // Sample usage 3
  iterateAndLog(['Hello', 'World', '!']);
  // Sample output 3:
  // 'Hello'
  // 'World'
  // '!'
  
  
  // Exercise 2 - forEach
  // Description: Iterate through the given array and log only the even elements to the console using the forEach method.
  // Parameters: array (array)
  // Returns: undefined
  
  function logEvenElements(array) {
    // Write your code here
  }
  
  // Sample usage 1
  logEvenElements([1, 2, 3, 4, 5]);
  // Sample output 1:
  // 2
  // 4
  
  // Sample usage 2
  logEvenElements([2, 4, 6, 8, 10]);
  // Sample output 2:
  // 2
  // 4
  // 6
  
  // Sample usage 3
  logEvenElements([3, 5, 7, 9, 11]);
  // Sample output 3:
  // (No output)
  
  
  // Exercise 3 - map
  // Description: Create a new array by doubling each element in the given array using the map method.
  // Parameters: array (array)
  // Returns: new array (array)
  
  function doubleElements(array) {
    // Write your code here
  }
  
  // Sample usage 1
  const doubledNumbers = doubleElements([1, 2, 3, 4, 5]);
  console.log(doubledNumbers);
  // Sample output 1: [2, 4, 6, 8, 10]
  
  // Sample usage 2
  const doubledNumbers2 = doubleElements([2, 3, 5, 7, 9]);
  console.log(doubledNumbers2);
  // Sample output 2: [4, 6, 10, 14, 18]
  
  // Sample usage 3
  const doubledNumbers3 = doubleElements([10, 20, 30, 40, 50]);
  console.log(doubledNumbers3);
  // Sample output 3: [20, 40, 60, 80, 100]
  
  
  // Exercise 4 - filter
  // Description: Create a new array by filtering out the odd elements from the given array using the filter method.
  // Parameters: array (array)
  // Returns: new array (array)
  
  function filterOddNumbers(array) {
    // Write your code here
  }
  
  // Sample usage 1
  const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);
  console.log(oddNumbers);
  // Sample output 1: [1, 3, 5]
  
  // Sample usage 2
  const oddNumbers2 = filterOddNumbers([2, 4, 6, 8, 10]);
  console.log(oddNumbers2);
  // Sample output 2: []
  
  // Sample usage 3
  const oddNumbers3 = filterOddNumbers([3, 5, 7, 9, 11]);
  console.log(oddNumbers3);
  // Sample output 3: [3, 5, 7, 9, 11]
  
  
  // Exercise 5 - filter
  // Description: Create a new array by filtering out the strings with more than 3 characters from the given array using the filter method.
  // Parameters: array (array)
  // Returns: new array (array)
  
  function filterShortWords(array) {
    // Write your code here
  }
  
  // Sample usage 1
  const shortWords = filterShortWords(['cat', 'dog', 'bird', 'lion']);
  console.log(shortWords);
  // Sample output 1: ['cat', 'dog']
  
  // Sample usage 2
  const shortWords2 = filterShortWords(['apple', 'banana', 'cherry']);
  console.log(shortWords2);
  // Sample output 2: []
  
  // Sample usage 3
  const shortWords3 = filterShortWords(['one', 'two', 'three', 'four']);
  console.log(shortWords3);
  // Sample output 3: ['one', 'two']
  
  
  // Exercise 6 - map and filter
// Description: Create a new array by doubling the even elements and filtering out the odd elements from the given array using the map and filter methods.
// Parameters: array (array)
// Returns: new array (array)

function doubleEvenFilterOdd(array) {
    // Write your code here
  }
  
  // Sample usage 1
  const filteredNumbers = doubleEvenFilterOdd([1, 2, 3, 4, 5]);
  console.log(filteredNumbers);
  // Sample output 1: [4, 8]
  
  // Sample usage 2
  const filteredNumbers2 = doubleEvenFilterOdd([2, 3, 4, 5, 6]);
  console.log(filteredNumbers2);
  // Sample output 2: [4, 8, 12]
  
  // Sample usage 3
  const filteredNumbers3 = doubleEvenFilterOdd([3, 5, 7, 9, 11]);
  console.log(filteredNumbers3);
  // Sample output 3: []
  