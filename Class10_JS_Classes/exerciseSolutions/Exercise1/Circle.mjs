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
import Shape from './Shape.mjs'; 

export default class Circle extends Shape {
  // Properties: (color is inherited), radius
  #radius;
  
  /**
   * Constructs a new Circle object.
   *
   * @constructor
   * @param {string} color - The color of the circle.
   * @param {number} radius - The radius of the circle.
   */
  constructor(color, radius) {
    // Call the parent constructor to initialize the color
    super(color);
    this.#radius = radius;
  }

  /**
   * Calculate the area of the circle.
   *
   * @returns {number} The area of the circle.
   */
  get area() {
    // Area = Pi * r^2
    return Math.PI * this.#radius * this.#radius;
  }

  /**
   * Calculate the circumference of the circle.
   *
   * @param {number} radius The radius of the circle
   * @returns {number} The circumference of the circle.
   */
  static circumference(radius) {
    return Math.PI * 2 * radius;
  }
}
