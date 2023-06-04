/**
 * EXERCISE 1 - Circle class
 * The Circle class is a subclass of Shape representing a circle.
 * Properties: 
 * - color: a string representing the color of the circle (inherited from Shape).
 * - radius: a number representing the radius of the circle.
 * 
 * Constructor: 
 * - Takes two parameters, color and radius, and initializes the color and radius properties.
 * 
 * Getters: 
 * - area: returns the area of the circle.
 * 
 * Static Methods:
 * - circumference: returns the circumference given a radius
 */
// Import Shape class here

export default class Circle extends Shape {
  // Properties: (color is inherited), radius

  /**
   * Constructs a new Circle object.
   *
   * @constructor
   * @param {string} color - The color of the circle.
   * @param {number} radius - The radius of the circle.
   */
  constructor(color, radius) {
    // Parameters: color (string), radius (number)
  }

  /**
   * Calculate the area of the circle.
   *
   * @returns {number} The area of the circle.
   */
  get area() {
    // TODO: Implement the area getter
  }

  /**
   * Calculate the circumference of the circle.
   *
   * @param {number} radius The radius of the circle
   * @returns {number} The circumference of the circle.
   */
  static circumference(radius) {
    // Parameters: radius (number)
  }
}
