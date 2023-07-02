/**
 * This function should return a Promise that resolves if the input is a string and rejects if the input is a number.
 * Implement this function using .then/catch.
 * @param {*} input - The input to test.
 * @returns {Promise<string|number>} A promise that resolves with the input if it's a string and rejects with the input if it's a number.
 */
function resolveOrRejectThen(input) {
    return new Promise((resolve, reject) => {
        if (typeof input === 'string') {
            resolve(input);
        } else if (typeof input === 'number') {
            reject(input);
        }
    });
}

// Sample Calls
resolveOrRejectThen("Hello").then(console.log); // Expected: "Hello"
resolveOrRejectThen(42).catch(console.log); // Expected: 42

/**
 * This function should try to await the resolveOrRejectThen() function with the given input and log the result or error.
 * @param {*} input - The input to test.
 */
async function callResolveOrRejectAsync(input) {
    try {
        let result = await resolveOrRejectThen(input);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// Sample Calls
callResolveOrRejectAsync("Hello"); // Expected: "Hello"
callResolveOrRejectAsync(42); // Expected: 42
