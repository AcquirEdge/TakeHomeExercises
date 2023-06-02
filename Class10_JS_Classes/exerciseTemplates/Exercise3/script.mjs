/**
 * EXERCISE 3: Statistics Class with Math
 * 
 * In this exercise, you will be creating a Statistics class that performs various statistical calculations on an array of numbers.
 */

// Import the Statistics class

// Instantiate a Statistics object with sample data
const stats = new Statistics([4, 7, 2, 9, 4, 1, 5]);

// Test functionality
console.log(stats.mean()); // should print: 4.857142857142857
console.log(stats.median()); // should print: 4
console.log(stats.mode()); // should print: [4]
console.log(stats.range()); // should print: { min: 1, max: 9 }
console.log(stats.variance()); // should print: 6.653061224489796
console.log(stats.standardDeviation()); // should print: 2.578782014278124
console.log(stats.sum()); // should print: 32
console.log(stats.sort()); // should print: [1, 2, 4, 4, 5, 7, 9]

console.log(Statistics.quartiles([3, 7, 8, 5, 12, 14, 21, 15, 18, 14])); // should print: { q1: 7, q2: 12, q3: 15 }

