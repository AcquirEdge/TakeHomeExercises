/**
 * EXERCISE 3 - Theater Class
 *
 * The Theater class represents a movie theater.
 * It has the following properties:
 * - name: A string representing the name of the theater.
 * - location: A string representing the location of the theater.
 * - movies: An array representing the movies playing in the theater.
 *
 * Constructor:
 * - Initializes the name and location properties based on the provided parameters.
 * - Initializes the movies property as an empty array.
 */
// import Movie class here

export default class Theater {
  // properties go here

   /**
   * Constructs a new Theater object.
   *
   * @constructor
   * @param {string} name - The name of the theater.
   * @param {string} location - The location of the theater.
   */
  constructor(name, location) {
    // Parameters: None
  }

  /**
   * Adds a movie to the collection.
   * @param {Movie} movie - The movie to add.
   */
  addMovie(movie) {
    // Parameters: movie (Movie instance)
  }

  /**
   * Removes a movie with the given title from the collection.
   * @param {string} title - The title of the movie to remove.
   */
  removeMovie(title) {
    // Parameters: title (string)
  }

  /**
   * Finds a movie in the collection by title.
   * @param {string} title - The title of the movie to find.
   * @returns {Object|null} The found movie.details or null if not found.
   */
  findMovie(title) {
    // Parameters: title (string)
    // Return the found movie.details or null
  }

  /**
   * Returns the total duration of all movies in the collection.
   * @returns {number} The total duration in minutes.
   */
  getTotalDuration() {
    // Return the total duration of all movies
  }
}
