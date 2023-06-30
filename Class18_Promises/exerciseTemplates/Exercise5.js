/**
 * This function should return a Promise that resolves if the input is a string and rejects if the input is a number.
 * Implement this function using .then/catch.
 * @param {*} input - The input to test.
 * @returns {Promise<string|number>} A promise that resolves with the input if it's a string and rejects with the input if it's a number.
 */
function resolveOrRejectThen(input) {
    // Your code here
}

// Sample Calls
resolveOrRejectThen("Hello").then(console.log); // Expected: "Hello"
resolveOrRejectThen(42).catch(console.log); // Expected: 42

/**
 * This function should try to await the resolveOrRejectThen() function with the given input and log the result or error.
 * @param {*} input - The input to test.
 */
async function callResolveOrRejectAsync(input) {
    // Your code here
}

// Sample Calls
callResolveOrRejectAsync("Hello"); // Expected: "Hello"
callResolveOrRejectAsync(42); // Expected: 42
