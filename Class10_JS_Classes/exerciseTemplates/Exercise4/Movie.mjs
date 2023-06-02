/**
 * EXERCISE 3 - Movie Class
 *
 * The Movie class represents a movie with the following properties:
 * - title: A string representing the title of the movie.
 * - duration: A number representing the duration of the movie in minutes.
 * - director: A string representing the director of the movie.
 *
 * Constructor:
 * - Initializes the title, genre, and director properties based on the provided parameters.
 */

export default class Movie {
  // properties go here

  /**
   * Creates a new Movie instance.
   * @param {string} title - The title of the movie.
   * @param {number} duration - The duration of the movie in minutes.
   * @param {string} director - The director of the movie.
   */
  constructor(title, duration, director) {
      // Parameters: title (string), duration (number), director (string)
  }

  /**
   * Gets the title of the movie.
   * @returns {string} The title of the movie.
   */
  get title() {
      // Return the title property
  }

  /**
   * Gets the duration of the movie.
   * @returns {number} The duration of the movie in minutes.
   */
  get duration() {
      // Return the duration property
  }

  /**
   * Gets the director of the movie.
   * @returns {string} The director of the movie.
   */
  get director() {
      // Return the director property
  }

  /**
   * Provides a getter method that returns an object containing all the essential details of the movie.
   *
   * The returned object includes:
   * - `title`: The title of the movie.
   * - `duration`: The duration of the movie in minutes.
   * - `director`: The director of the movie.
   *
   * @returns {Object} An object encapsulating all the details of the movie instance.
   */
  get details() {
    // Return the details object
  }
}
