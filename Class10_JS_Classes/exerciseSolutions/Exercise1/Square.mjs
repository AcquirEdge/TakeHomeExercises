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
import Shape from './Shape.mjs'

export default class Square extends Shape {
  #size;

  /**
   * Constructs a new Square object.
   *
   * @constructor
   * @param {string} color - The color of the square.
   * @param {number} size - The length of the square's sides.
   */
  constructor(color, size) {
    super(color);
    this.#size = size;
  }

  /**
   * Calculate the area of the square.
   *
   * @returns {number} The area of the square.
   */
  get area() {
    return this.#size ** 2;
  }
}