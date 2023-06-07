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
import Album from './Album.mjs'
export default class Library {
  // properties here
  #albums;
  /**
   * Create a Library instance.
   */
  constructor() {
    this.#albums = [];
  }

  /**
   * Add an album to the library.
   * @param {Album} album - The album to add.
   */
  addAlbum(album) {
    if (album instanceof Album) {
      this.#albums.push(album);
    } else {
      console.log("Invalid album");
    }
  }

  /**
   * Remove an album from the library.
   * @param {string} title - The title of the album to remove.
   */
  removeAlbum(title) {
    this.#albums = this.#albums.filter((album) => {
      return album.title !== title
    });
  }

  /**
   * Get albums by artist.
   * @param {string} artist - The artist name.
   * @returns {Album[]} An array of album details objects by the given artist.
   */
  getAlbumsByArtist(artist) {
    return this.#albums.filter((album) => {
      return album.artist === artist
    }).map((album) => {
      return album.details
    });
  }

  /**
   * Get albums by genre.
   * @param {string} genre - The genre.
   * @returns {Album[]} An array of album details objects in the given genre.
   */
  getAlbumsByGenre(genre) {
    return this.#albums.filter((album) => {
      return album.genre === genre
    }).map((album) => {
      return album.details
    });
  }

  /**
   * Get albums by year range.
   * @param {number} startYear - The start year of the range.
   * @param {number} endYear - The end year of the range.
   * @returns {Album[]} An array of album details objects released within the given year range.
   */
  getAlbumsByYearRange(startYear, endYear) {
    return this.#albums.filter((album) => {
      return album.year >= startYear && album.year <= endYear
    }).map((album) => {
      return album.details
    });
  }

  /**
   * Log the details of all albums in the library.
   */
  listAlbums() {
    this.#albums.forEach((album) => {
      console.log(album.details)
    });
  }
}
