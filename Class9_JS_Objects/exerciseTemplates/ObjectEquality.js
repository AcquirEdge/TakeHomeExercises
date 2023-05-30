/**
 * ObjectEquality.js
 *
 * Practice with object equality and JSON methods in JavaScript.
 */

// Sample Objects for Exercises 1, 2, and 3:
let cat1 = {
    name: 'Fluffy',
    color: 'white',
    age: 5
};

let cat2 = {
    name: 'Fluffy',
    color: 'white',
    age: 5
};

let cat3 = {
    name: 'Whiskers',
    color: 'grey',
    age: 3
};

let book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960,
    ratings: {
        goodreads: 4.3,
        amazon: 4.8
    }
};

let book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960,
    ratings: {
        goodreads: 4.3,
        amazon: 4.8
    }
};

let book3 = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949,
    ratings: {
        goodreads: 4.2,
        amazon: 4.7
    }
};

// Sample Object for Exercise 4:
let user = {
    username: 'jsmith',
    preferences: {
        theme: 'dark',
        fontSize: 'medium'
    }
};

let user2 = {
    username: 'mjohnson',
    preferences: {
        theme: 'light',
        fontSize: 'large'
    }
};

// Sample Array for Exercise 5:
let people = [
    {
        name: 'Alice',
        friends: ['Bob', 'Carol', 'Dave']
    },
    {
        name: 'Bob',
        friends: ['Alice', 'Eve']
    },
    {
        name: 'Carol',
        friends: ['Alice', 'Dave']
    },
    {
        name: 'Dave',
        friends: ['Alice', 'Carol', 'Eve']
    },
    {
        name: 'Eve',
        friends: ['Bob', 'Dave']
    }
];

/**
 * Exercise 1:
 *
 * Write a function shallowEquality that checks if two objects are shallowly equal.
 * 
 * Note: You can compare object properties using the '==' operator.
 */

function shallowEquality(obj1, obj2) {
    // Your code here
}

// Example Usage:
// console.log(shallowEquality(cat1, cat2));  // Expected output: true
// console.log(shallowEquality(cat1, cat3));  // Expected output: false

/**
 * Exercise 2:
 *
 * Write a function deepEquality that checks if two objects are deeply equal.
 * 
 * Note: You will need to check all nested properties for equality.
 */

function deepEquality(obj1, obj2) {
    // Your code here
}

// Example Usage:
// console.log(deepEquality(book1, book2));  // Expected output: true
// console.log(deepEquality(book1, book3));  // Expected output: false

/**
 * Exercise 3:
 *
 * Write a new function jsonDeepEquality that checks if two objects are deeply equal 
 * using JSON library methods.
 */

function jsonDeepEquality(obj1, obj2) {
    // Your code here
}

// Example Usage:
// console.log(jsonDeepEquality(book1, book2));  // Expected output: true
// console.log(jsonDeepEquality(book2, book3));  // Expected output: false

/**
 * Exercise 4: 
 * Parameters: user (Object), newPreferences (Object)
 * The function should update the 'preferences' property of the 'user' object with 'newPreferences' object.
 * Return: None. The user object should be updated directly.
 */

function updatePreferences(user, newPreferences) {
    // Your code here
}

// Use the jsonDeepEquality function to check if the updated user.preferences is deeply equal to newPreferences.

// Example Usage:

// updatePreferences(user, {theme: 'light', fontSize: 'large'});
// console.log(jsonDeepEquality(user.preferences, {theme: 'light', fontSize: 'large'})); // Expected output: true

// updatePreferences(user, {theme: 'dark', fontSize: 'medium'});
// console.log(jsonDeepEquality(user.preferences, {theme: 'dark', fontSize: 'medium'})); // Expected output: true

// updatePreferences(user, {theme: 'light', fontSize: 'medium'});
// console.log(jsonDeepEquality(user.preferences, {theme: 'light', fontSize: 'medium'})); // Expected output: true

// updatePreferences(user, {theme: 'dark', fontSize: 'large'});
// console.log(jsonDeepEquality(user.preferences, {theme: 'dark', fontSize: 'large'})); // Expected output: true

// updatePreferences(user, {theme: 'light', fontSize: 'large'});
// console.log(jsonDeepEquality(user.preferences, {theme: 'light', fontSize: 'large'})); // Expected output: true


/**
 * Exercise 5:
 *
 * Write a function friendsInCommon that takes two people from the array and returns 
 * an array of their friends in common.
 * 
 * Note: A friend is considered "in common" if they appear in both people's friends list.
 */

function friendsInCommon(person1, person2) {
    // Your code here
}

// Example Usage:
// console.log(friendsInCommon(people[0], people[2]));  // Expected output: ['Dave']
// console.log(friendsInCommon(people[1], people[2]));  // Expected output: ['Alice']
// console.log(friendsInCommon(people[2], people[3]));  // Expected output: ['Alice']
// console.log(friendsInCommon(people[1], people[3]));  // Expected output: ['Alice', 'Eve']
// console.log(friendsInCommon(people[0], people[4]));  // Expected output: ['Bob', 'Dave']