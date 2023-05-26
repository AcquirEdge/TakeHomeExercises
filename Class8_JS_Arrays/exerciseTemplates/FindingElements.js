// findElement
// Find the first element greater than 5 in the array
function findElement(array) {
  // TODO: Implement your code here
}

// Sample usages
console.log(findElement([1, 3, 6, 2, 9])); // Output: 6
console.log(findElement([10, 4, 8, 2, 7])); // Output: 10
console.log(findElement([3, 1, 2, 7, 4])); // Output: 7
console.log(findElement([9, 8, 7, 6, 5])); // Output: 9

// findPerson
// Find a person object with the given name
function findPerson(people, name) {
  // TODO: Implement your code here
}

// Sample usages
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];
console.log(findPerson(people, "John")); // Output: { name: 'John', age: 25 }
console.log(findPerson(people, "Jane")); // Output: { name: 'Jane', age: 30 }
console.log(findPerson(people, "Bob")); // Output: { name: 'Bob', age: 35 }
console.log(findPerson(people, "Alice")); // Output: undefined

// findIndexElement
// Find the index of a specific element in the array
function findIndexElement(array, element) {
  // TODO: Implement your code here
}

// Sample usages
console.log(findIndexElement([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(findIndexElement([10, 20, 30, 40, 50], 40)); // Output: 3
console.log(findIndexElement(["apple", "banana", "orange"], "banana")); // Output: 1
console.log(findIndexElement(["cat", "dog", "bird"], "elephant")); // Output: -1

// findIndexPerson
// Find the index of a person object with the given name
function findIndexPerson(people, name) {
  // TODO: Implement your code here
}

// Sample usages
console.log(findIndexPerson(people, "Jane")); // Output: 1
console.log(findIndexPerson(people, "Bob")); // Output: 2
console.log(findIndexPerson(people, "Alice")); // Output: -1
console.log(findIndexPerson(people, "John")); // Output: 0

// findIndexEvenNumber
// Find the index of the first even number in the array
function findIndexEvenNumber(array) {
  // TODO: Implement your code here
}

// Sample usages
console.log(findIndexEvenNumber([1, 3, 5, 7, 4])); // Output: 4
console.log(findIndexEvenNumber([9, 11, 13, 15])); // Output: -1
console.log(findIndexEvenNumber([2, 4, 6, 8, 10])); // Output: 0
console.log(findIndexEvenNumber([1, 7, 3, 5])); // Output: -1

// findPersonAge
// Find a person object with the given age
function findPersonAge(people, age) {
  // TODO: Implement your code here
}

// Sample usages
console.log(findPersonAge(people, 30)); // Output: { name: 'Jane', age: 30 }
console.log(findPersonAge(people, 40)); // Output: undefined
console.log(findPersonAge(people, 25)); // Output: { name: 'John', age: 25 }
console.log(findPersonAge(people, 20)); // Output: undefined
