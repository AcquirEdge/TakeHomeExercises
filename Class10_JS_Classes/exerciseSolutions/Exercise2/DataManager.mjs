let _ = require('lodash');

/**
 * EXERCISE 2 - DataManager Class
 *
 * Purpose: The DataManager class provides complex manipulation of structured data.
 * It uses lodash, a popular JavaScript utility library, to offer advanced data manipulation techniques
 * including deep cloning, deep equality checking, finding elements in nested structures, and reshuffling of arrays.
 *
 * Properties:
 * - #data: a private property that holds the data managed by the instance of DataManager
 *
 * Methods:
 * - cloneData: clones the data deeply and returns the cloned data
 * - setValue: sets a value in the data using a path
 * - getValue: gets a value in the data using a path
 * - isEqual: checks if the data is deeply equal to another data object
 * - find: finds an element in the data that satisfies a predicate
 * - shuffleData: shuffles the data and returns the data in a different order
 *
 * @class DataManager
 */
export default class DataManager {
  #data;

  /**
   * DataManager constructor.
   *
   * @constructor
   * @param {object} data - The data to manage.
   */
  constructor(data) {
    this.#data = data;
  }

  /**
   * Clones the data deeply.
   *
   * @returns {object} The cloned data.
   */
  cloneData() {
    return _.cloneDeep(this.#data);
  }

  /**
   * Sets a value in the data using a path.
   *
   * @param {string} path - The path to the value to set.
   * @param {any} value - The value to set.
   */
  setValue(path, value) {
    _.set(this.#data, path, value);
  }

  /**
   * Gets a value in the data using a path.
   *
   * @param {string} path - The path to the value to get.
   * @returns {any} The value at the path, or undefined if the path is not found.
   */
  getValue(path) {
    return _.get(this.#data, path);
  }

  /**
   * Checks if the data is deeply equal to another data object.
   *
   * @param {object} otherData - The data to compare to.
   * @returns {boolean} true if the data is deeply equal to the other data, false otherwise.
   */
  isEqual(otherData) {
    return _.isEqual(this.#data, otherData);
  }

  /**
   * Finds an element in the data that satisfies a predicate.
   *
   * @param {function} predicate - The predicate function.
   * @returns {any} The found element, or undefined if no element was found.
   */
  find(predicate) {
    return _.find(this.#data, predicate);
  }

  /**
   * Shuffles the data.
   *
   * @returns {object} The data in a different order.
   */
  shuffleData() {
    if (Array.isArray(this.#data)) {
      return _.shuffle(this.#data);
    }
    return this.#data; // if the data is not an array, we can't shuffle it
  }
}
