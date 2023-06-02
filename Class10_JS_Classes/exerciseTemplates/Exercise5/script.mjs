/**
 * EXERCISE 5 - Music Library System
 * 
 * This exercise focuses on creating a music library system that allows managing a collection of albums. It includes two main classes: Album and Library.
 * 
 * Album:
 * Represents a music album with properties such as titie, artist, genre, and year. Provides methods to retrieve album information.
 * 
 * Library:
 * Represents a music library that manages a collection of albums. Allows adding, retrieving, finding, removing albums.
 *
 * This script tests the functionality of the Album and Library classes.
 */

// Import the Album and Library classes

// Create some album instances
const album1 = new Album('OK Computer', 'Radiohead', 'Alternative Rock', 1997);
const album2 = new Album('Dark Side of the Moon', 'Pink Floyd', 'Progressive Rock', 1973);
const album3 = new Album('In Rainbows', 'Radiohead', 'Alternative Rock', 2007);
const album4 = new Album('The Queen Is Dead', 'The Smiths', 'Indie Rock', 1986);

// Create a library instance
const library = new Library();

// Test adding albums to the library
console.log("\nAdding albums to the library...");

library.addAlbum(album1);
library.addAlbum(album2);
library.addAlbum(album3);
library.addAlbum(album4);

// Expected output: No output. The albums are added to the library.

// Test listing all the albums in the library
console.log("\nListing all albums in the library:");
library.listAlbums();

// Expected output:
// 'OK Computer' by Radiohead, Genre: Alternative Rock, Released in: 1997
// 'Dark Side of the Moon' by Pink Floyd, Genre: Progressive Rock, Released in: 1973
// 'In Rainbows' by Radiohead, Genre: Alternative Rock, Released in: 2007
// 'The Queen Is Dead' by The Smiths, Genre: Indie Rock, Released in: 1986

// Test finding albums by artist in the library
console.log("\nFinding albums by artist 'Radiohead':");
console.log(library.getAlbumsByArtist('Radiohead'));

// Expected output:
// 'OK Computer' by Radiohead, Genre: Alternative Rock, Released in: 1997
// 'In Rainbows' by Radiohead, Genre: Alternative Rock, Released in: 2007

// Test finding albums by genre in the library
console.log("\nFinding albums in genre 'Alternative Rock':");
console.log(library.getAlbumsByGenre('Alternative Rock'));

// Expected output:
// 'OK Computer' by Radiohead, Genre: Alternative Rock, Released in: 1997
// 'In Rainbows' by Radiohead, Genre: Alternative Rock, Released in: 2007

// Test finding albums by year range in the library
console.log("\nFinding albums released between 1980 and 2000:");
console.log(library.getAlbumsByYearRange(1980, 2000));

// Expected output:
// 'OK Computer' by Radiohead, Genre: Alternative Rock, Released in: 1997
// 'The Queen Is Dead' by The Smiths, Genre: Indie Rock, Released in: 1986

// Test removing an album from the library
console.log("\nRemoving 'The Queen Is Dead' from the library...");
library.removeAlbum('The Queen Is Dead');

// Expected output: No output. The album is removed from the library.

console.log("\nListing all albums in the library after removal:");
library.listAlbums();

// Expected output:
// 'OK Computer' by Radiohead, Genre: Alternative Rock, Released in: 1997
// 'Dark Side of the Moon' by Pink Floyd, Genre: Progressive Rock, Released in: 1973
// 'In Rainbows' by Radiohead, Genre: Alternative Rock, Released in: 2007
