// sumArray
// Write a function that takes an array of numbers as a parameter
// Use the reduce() method to calculate and return the sum of all elements in the array
function sumArray(array) {
  return array.reduce((sum, element) => {
    return sum += element;
  })
}

// Sample usage
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([-1, 0, 1])); // Output: 0

// findMax
// Write a function that takes an array of numbers as a parameter
// Use the reduce() method to find and return the maximum value in the array
function findMax(array) {
  return array.reduce((max, element) => {
    return element > max ? element: max;
  })
}

// Sample usage
console.log(findMax([1, 5, 3, 8, 2])); // Output: 8
console.log(findMax([10, 4, 7, 2, 9])); // Output: 10
console.log(findMax([-1, -5, -3])); // Output: -1

// countOccurrences
// Write a function that takes an array of strings as a parameter
// Use the reduce() method to count and return the number of occurrences of a specific string in the array
function countOccurrences(array, searchString) {
  return array.reduce((count, element) => {
    if(element === searchString){
      return count += 1;
    }
    return count;
  }, 0)
}

// Sample usage
console.log(
  countOccurrences(["apple", "banana", "orange", "banana"], "banana")
); // Output: 2
console.log(countOccurrences(["cat", "dog", "cat", "bird", "cat"], "cat")); // Output: 3
console.log(countOccurrences(["apple", "banana", "orange"], "grape")); // Output: 0

// concatenateArray
// Write a function that takes an array of strings as a parameter
// Use the reduce() method to concatenate all elements in the array and return the resulting string
function concatenateArray(array) {
  return array.reduce((result, element) => {
    return result += element;
  })
}

// Sample usage
console.log(concatenateArray(["Hello", " ", "World", "!"])); // Output: 'Hello World!'
console.log(
  concatenateArray(["I", " ", "am", " ", "learning", " ", "JavaScript"])
); // Output: 'I am learning JavaScript'
console.log(concatenateArray(["Software ", "Engineering", " ", "is", " ", "awesome"])); // Output: 'OpenAI is awesome'
