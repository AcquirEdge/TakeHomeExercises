/**
 * EXERCISE 4 - Library Class
 *
 * The Library class represents a music library.
 * It has the following properties:
 * - #albums: An array representing the albums in the library.
 *
 * Constructor:
 * - Initializes the albums property as an empty array.
 *
 * The Library class should have the following methods:
 * - addAlbum: A method that accepts an Album instance and adds it to the albums array.
 * - removeAlbum: A method that accepts a title and removes the album with that title from the albums array.
 * - getAlbumsByArtist: A method that accepts an artist name and returns an array of albums by that artist.
 * - getAlbumsByGenre: A method that accepts a genre and returns an array of albums in that genre.
 * - getAlbumsByYearRange: A method that accepts a start year and an end year, and returns an array of albums released within that year range.
 * - listAlbums: A method that logs the details of all albums in the library.
 */
// Import Album here
export default class Library {
  // properties here
  /**
   * Create a Library instance.
   */
  constructor() {
    // Initialize the albums property as an empty array
  }

  /**
   * Add an album to the library.
   * @param {Album} album - The album to add.
   */
  addAlbum(album) {
    // Add the album to the albums array
  }

  /**
   * Remove an album from the library.
   * @param {string} title - The title of the album to remove.
   */
  removeAlbum(title) {
    // Remove the album with the given title from the albums array
  }

  /**
   * Get albums by artist.
   * @param {string} artist - The artist name.
   * @returns {Object[]} An array of album details objects by the given artist.
   */
  getAlbumsByArtist(artist) {
    // Return an array of album details objects by the given artist
  }

  /**
   * Get albums by genre.
   * @param {string} genre - The genre.
   * @returns {Object[]} An array of album details objects in the given genre.
   */
  getAlbumsByGenre(genre) {
    // Return an array of album details objects in the given genre
  }

  /**
   * Get albums by year range.
   * @param {number} startYear - The start year of the range.
   * @param {number} endYear - The end year of the range.
   * @returns {Object[]} An array of album details objects released within the given year range.
   */
  getAlbumsByYearRange(startYear, endYear) {
    // Return an array of album details objects released within the given year range
  }

  /**
   * Log the details of all albums in the library.
   */
  listAlbums() {
    // Log the details of all albums in the library
  }
}
