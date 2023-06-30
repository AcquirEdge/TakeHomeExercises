/**
 * This function should return a Promise that immediately resolves with the given value.
 * Implement this function using .then/catch.
 * @param {*} value - The value to resolve the promise with.
 * @returns {Promise<*>} A promise that resolves with the given value.
 */
function resolveWithValueThen(value) {
    // Your code here
}

// Sample Calls
resolveWithValueThen("Hello").then(console.log); // Expected: "Hello"
resolveWithValueThen(42).then(value => console.log(value * 2)); // Expected: 84

/**
 * This function should await the resolveWithValueThen() function with the given value and log the result.
 * @param {*} value - The value to resolve the promise with.
 */
async function callResolveWithValueAsync(value) {
    // Your code here
}

// Sample Calls
callResolveWithValueAsync("Hello"); // Expected: "Hello"
callResolveWithValueAsync(42); // Expected: 42
