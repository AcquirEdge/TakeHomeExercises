// File: exercise4.js

// Declare a function that returns an object
function createPerson(firstName, lastName) {
    let person = {
        firstName: firstName,
        lastName: lastName
    }
    return person;
}

// Call the function with two arguments, assign the returned object to a variable, and log the variable to the console
const person = createPerson("John", "Doe");
console.log("Created person:", person);