/**
 * EXERCISE 1
 * This exercise involves creating classes that represent various geometric shapes.
 * You'll create a general Shape class and specific classes for Circles, Squares, and Triangles.
 * Each shape will be able to report its own area, a fundamental property of two-dimensional shapes.
 * The Circle class has an additional functionality of calculating the circumference.
 */

import Circle from './Circle.mjs';
import Square from './Square.mjs';
import Triangle from './Triangle.mjs'

// Instantiate some shapes with sample data
const circle1 = new Circle('Red', 5);
const circle2 = new Circle('Blue', 3);
const square1 = new Square('Green', 6);
const square2 = new Square('Purple', 7);
const triangle1 = new Triangle('Yellow', 3, 4);
const triangle2 = new Triangle('Orange', 5, 6);

// Log the area of each shape
console.log(circle1.area); // should print: 78.53981633974483
console.log(circle2.area); // should print: 28.274333882308138
console.log(square1.area); // should print: 36
console.log(square2.area); // should print: 49
console.log(triangle1.area); // should print: 6
console.log(triangle2.area); // should print: 15

// Use the static method of Circle
console.log(Circle.circumference(5)); // should print: 31.41592653589793
console.log(Circle.circumference(3)); // should print: 18.84955592153876
