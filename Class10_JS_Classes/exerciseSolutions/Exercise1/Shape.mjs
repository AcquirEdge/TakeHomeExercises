/**
 * EXERCISE 1 - Shape class
 * Define a Shape class with:
 * - A constructor that accepts a 'color' parameter and initializes a private '_color' property.
 * - A public 'area' getter method that returns 0 (This will be overridden in subclasses).
 *
 * @class Shape
 */
export default class Shape {
  // properties go here
  #color;
  /**
   * Constructs a new Shape object.
   *
   * @constructor
   * @param {string} color - The color of the shape.
   */
  constructor(color) {
    this.#color = color;
  }

  /**
   * Get the area of the shape.
   *
   * @returns {number} The area of the shape.
   */
  get area() {
    return 0;
  }
}
