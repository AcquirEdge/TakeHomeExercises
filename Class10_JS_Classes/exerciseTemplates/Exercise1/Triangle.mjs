/**
 * EXERCISE 1 - Triangle class
 * The Triangle class is a subclass of Shape representing an equilateral triangle.
 * Properties:
 * - color: a string representing the color of the triangle (inherited from Shape).
 * - length: number representing the length of the triangle
 * - height: number representing the height of the triangle
 *
 * @class Triangle
 * @extends Shape
 */
export default class Triangle extends Shape {
  // Properties: (color is inherited), length, height

  /**
   * Constructs a new Triangle object.
   *
   * @constructor
   * @param {string} color - The color of the triangle.
   * @param {number} length - The length of the triangle.
   * @param {number} height - the height of the triangle
   */
  constructor(color, length, height) {
    // TODO: Initialize the color and side properties
  }

  /**
   * Calculate the area of the triangle.
   *
   * @returns {number} The area of the triangle.
   */
  get area() {
    // TODO: Implement the calculateArea method
  }
}