/**
 * EXERCISE 4: Theater and Movie Classes
 * 
 * In this exercise, you will be creating two classes:
 * - Movie: This class represents a movie with a title, duration, and director.
 * - Theater: This class represents a theater that can manage a collection of movies.
 */

// Import the necessary classes

// Instantiate some movies with sample data
const movie1 = new Movie('Inception', 148, 'Christopher Nolan');
const movie2 = new Movie('The Shawshank Redemption', 142, 'Frank Darabont');
const movie3 = new Movie('Pulp Fiction', 154, 'Quentin Tarantino');

// Instantiate a theater
const theater = new Theater();

// Add movies to the theater
theater.addMovie(movie1);
theater.addMovie(movie2);
theater.addMovie(movie3);

// Test functionality
console.log(theater.findMovie('Inception')); // should print: Movie { _title: 'Inception', _duration: 148, _director: 'Christopher Nolan' }
console.log(theater.findMovie('The Shawshank Redemption')); // should print: Movie { _title: 'The Shawshank Redemption', _duration: 142, _director: 'Frank Darabont' }

console.log(theater.getTotalDuration()); // should print: 444 (148 + 142 + 154)

theater.removeMovie('Pulp Fiction');
console.log(theater.findMovie('Pulp Fiction')); // should print: null

// Additional testing
const movie4 = new Movie('The Godfather', 175, 'Francis Ford Coppola');
theater.addMovie(movie4);

console.log(theater.getTotalDuration()); // should print: 465 (148 + 142 + 175)

