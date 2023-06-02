/**
 * EXERCISE 1 - Square class
 * The Square class is a subclass of Shape representing a square.
 * Properties: 
 * - color: a string representing the color of the square (inherited from Shape).
 * - size: a number representing the length of the square's sides.
 *
 * @class Square
 * @extends Shape
 */
// import Shape class here

export default class Square extends Shape {
  // Properties: (color is inherited), radius

  /**
   * Constructs a new Square object.
   *
   * @constructor
   * @param {string} color - The color of the square.
   * @param {number} size - The length of the square's sides.
   */
  constructor(color, size) {
    // TODO: Initialize the color and size properties
  }

  /**
   * Calculate the area of the square.
   *
   * @returns {number} The area of the square.
   */
  get area() {
    // TODO: Implement the calculateArea method
  }
}