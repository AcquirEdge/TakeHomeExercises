/**
 * EXERCISE 3 - Album Class
 *
 * The Album class represents a music album.
 * It has the following private properties:
 * - _title: A string representing the title of the album.
 * - _artist: A string representing the artist of the album.
 * - _genre: A string representing the genre of the album.
 * - _year: A number representing the release year of the album.
 *
 * Constructor:
 * - Accepts the title, artist, genre, and year as parameters and initializes the corresponding properties.
 *
 * Getters and Setters:
 * - title: A getter and setter for the album title.
 * - artist: A getter and setter for the album artist.
 * - genre: A getter and setter for the album genre.
 * - year: A getter and setter for the album release year.
 *
 * Methods:
 * - None at the moment.
 */

export default class Album {
  // private properties go here
  #title;
  #artist;
  #genre;
  #year;
  /**
   * Create an Album instance.
   * @param {string} title - The title of the album.
   * @param {string} artist - The artist of the album.
   * @param {string} genre - The genre of the album.
   * @param {number} year - The year of release of the album.
   */
  constructor(title, artist, genre, year) {
    this.#title = title;
    this.#artist = artist;
    this.#genre = genre;
    this.#year = year;
  }

  // Getters and Setters
  /**
   * Gets the title of the album.
   * @returns {string} The title of the album.
   */
  get title() {
    return this.#title;
  }

  /**
   * Sets the title of the album.
   * @param {string} title - The title of the album.
   */
  set title(newTitle) {
    this.#title = newTitle;
  }

  /**
   * Gets the artist of the album.
   * @returns {string} The artist of the album.
   */
  get artist() {
    return this.#artist;
  }

  /**
   * Sets the artist of the album.
   * @param {string} artist - The artist of the album.
   */
  set artist(newArtist) {
    this.#artist = newArtist;
  }

  /**
   * Gets the genre of the album.
   * @returns {string} The genre of the album.
   */
  get genre() {
    return this.#genre;
  }

  /**
   * Sets the genre of the album.
   * @param {string} genre - The genre of the album.
   */
  set genre(newGenre) {
    this.#genre = newGenre;
  }

  /**
   * Gets the release year of the album.
   * @returns {number} The release year of the album.
   */
  get year() {
    return this.#year;
  }

  /**
   * Sets the release year of the album.
   * @param {number} year - The release year of the album.
   */
  set year(newYear) {
    this.#year = newYear;
  }

  /**
   * Gets the details of the album.
   * @returns {object} The details of the album, which includes the title, artist, genre, and year.
   */
  get details() {
    return {
      title: this.#title,
      artist: this.#artist,
      genre: this.#genre,
      year: this.#year
    };
  }
}
