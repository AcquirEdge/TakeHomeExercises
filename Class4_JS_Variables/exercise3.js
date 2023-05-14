// File: exercise3.js

// Declare a function with a default parameter
function displayGreeting(name = "Guest") {
  let str = "Hello " + name + "!";
  return str;
}

// Call the function with and without an argument, and log the results to the console
console.log("Greeting for John:", displayGreeting("John"));
console.log("Greeting for no name:", displayGreeting());
  