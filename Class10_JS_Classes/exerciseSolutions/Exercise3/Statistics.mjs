/**
 * EXERCISE 3 - Statistics Class with Math
 * 
 * The Statistics class performs various statistical calculations on an array of numbers.
 * It has methods to calculate the mean, median, mode, range, variance, standard deviation, sum,
 * and sort the array of numbers. It also includes a static method to calculate the quartiles
 * of a given array.
 * @class Statistics
 */
export default class Statistics {
    #numbers;

     /**
   * Constructs a new Statistics object.
   *
   * @constructor
   * @param {Array} numbers - The array of numbers for statistical calculations.
   */
  constructor(numbers) {
    this.#numbers = numbers;
  }

  /**
   * Calculates and returns the mean of the numbers array.
   *
   * @returns {number} The mean of the numbers array.
   */
  mean() {
    return this.sum() / this.#numbers.length;
  }

  /**
   * Calculates and returns the median of the numbers array.
   *
   * @returns {number} The median of the numbers array.
   */
  median() {
    let sorted = this.#numbers.slice().sort((a, b) => a - b);
    let midIndex = Math.floor(sorted.length / 2);

    // if array length is even, median is average of two middle numbers
    return sorted.length % 2 !== 0 ? sorted[midIndex] : (sorted[midIndex - 1] + sorted[midIndex]) / 2;
  }

  /**
   * Calculates and returns the mode(s) of the numbers array as an array.
   *
   * @returns {Array} The mode(s) of the numbers array.
   */
  mode() {
    // creating an object 'counts' which will track the number of times each number shows up in #numbers
    let counts = {};
    this.#numbers.forEach((num) => {
      if(counts[num] === undefined){
        counts[num] = 1;
      } else {
        counts[num] += 1;
      }
    })
    // Finding the highest count number in 'counts'
    let maxCount = Math.max(...Object.values(counts));

    // Creating a new array with only the numbers that have the highest count number
    let result = [];
    for(let key in counts) {
      if(counts[key] === maxCount){
        // Since 'key' is accessed as a string, not a number, we use parseFloat to turn it back into a number
        result.push(parseFloat(key));
      }
    }

    return result;

    // Below is a more advanced way of accomplishing this using method chaining after generating the 'counts' object and 'maxCount'
    // return Object.keys(counts).filter(num => counts[num] === maxCount).map((mode) => parseFloat(mode));
  }

  /**
   * Calculates and returns an object representing the range of the numbers array (min and max values).
   *
   * @returns {Object} An object representing the range of the numbers array with properties 'min' and 'max'.
   */
  range() {
    return {
      min: Math.min(...this.#numbers),
      max: Math.max(...this.#numbers),
    };
  }

  /**
   * Calculates and returns the variance of the numbers array.
   *
   * @returns {number} The variance of the numbers array.
   */
  variance() {
    // variance equals sum(each element's difference from the mean squared)/(number of elements)
    let mean = this.mean();
    // totalDeviation is the numerator of the variance
    let totalDeviation = this.#numbers.reduce((sum, currentNum) => {
      return sum + (currentNum - mean) ** 2
    }, 0)
    return totalDeviation / this.#numbers.length;
  }

  /**
   * Calculates and returns the standard deviation of the numbers array.
   *
   * @returns {number} The standard deviation of the numbers array.
   */
  standardDeviation() {
    // standard deviation is just the square root of variance
    return Math.sqrt(this.variance());
  }

  /**
   * Calculates and returns the sum of the numbers array.
   *
   * @returns {number} The sum of the numbers array.
   */
  sum() {
    return this.#numbers.reduce((sum, num) => sum + num, 0);
  }

  /**
   * Returns a sorted array of the numbers array.
   *
   * @returns {Array} A sorted array of the numbers array.
   */
  sort() {
    return this.#numbers.slice().sort((a, b) => a - b);
  }

  /**
   * Calculates and returns the quartiles (first, second, and third quartiles) of the given array as an object.
   *
   * @param {Array} numbers - The array of numbers for quartile calculation.
   * @returns {Object} An object representing the quartiles with properties 'first', 'second', and 'third'.
   */
  static quartiles(numbers) {
    // In order to calculate quartiles, we have to first sort the incoming array
    let sorted = numbers.slice().sort((a, b) => a - b);

    // Then, we must find the middle index 
    let midIndex = Math.floor(sorted.length / 2);
    return {
      q1: sorted[Math.floor(midIndex / 2)],
      // if there are an odd number of elements we have to give the average of the middle 2
      q2: sorted.length % 2 !== 0 ? sorted[midIndex] : (sorted[midIndex - 1] + sorted[midIndex]) / 2,
      q3: sorted[midIndex + Math.floor(midIndex / 2)],
    };
  }
}
