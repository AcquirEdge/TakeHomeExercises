/* Classes.js */

/* Exercise 1:
Create a `Person` class with a constructor that accepts `name` and `age` as parameters and assigns them to the respective properties of the class.
Also, create a method `introduce` in the `Person` class that logs a message in the format: "Hello, my name is [name] and I am [age] years old."
The method should utilize the `this` keyword to refer to the instance's properties. 
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person('John', 25);
person1.introduce(); // Should print: 'Hello, my name is John and I am 25 years old.'


/* Exercise 2:
Create a `Book` class with a constructor that accepts `title`, `author`, and `yearPublished` as parameters and assigns them to the respective properties of the class.
Also, create a method `describe` in the `Book` class that logs a message in the format: "The book '[title]' was written by [author] and published in [yearPublished]."
The method should utilize the `this` keyword to refer to the instance's properties. 
*/

class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    describe() {
        console.log(`The book '${this.title}' was written by ${this.author} and published in ${this.yearPublished}.`);
    }
}

let book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
book1.describe(); // Should print: 'The book 'To Kill a Mockingbird' was written by Harper Lee and published in 1960.'


/* Exercise 3:
Create a `Movie` class with a constructor that accepts `title`, `director`, `genre`, and `yearReleased` as parameters and assigns them to the respective properties of the class.
Also, create a method `getInfo` in the `Movie` class that logs a message in the format: "[title] is a [genre] film directed by [director] and released in [yearReleased]."
The method should utilize the `this` keyword to refer to the instance's properties. 
*/

class Movie {
    constructor(title, director, genre, yearReleased) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.yearReleased = yearReleased;
    }

    getInfo() {
        console.log(`${this.title} is a ${this.genre} film directed by ${this.director} and released in ${this.yearReleased}.`);
    }
}

let movie1 = new Movie('Inception', 'Christopher Nolan', 'Sci-fi', 2010);
movie1.getInfo(); // Should print: 'Inception is a Sci-fi film directed by Christopher Nolan and released in 2010.'
