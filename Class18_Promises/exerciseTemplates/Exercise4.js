/**
 * This function should return a Promise that immediately rejects with the given value.
 * Implement this function using .then/catch.
 * @param {*} value - The value to reject the promise with.
 * @returns {Promise<*>} A promise that rejects with the given value.
 */
function rejectWithValueThen(value) {
    // Your code here
}

// Sample Calls
rejectWithValueThen("Some error").catch(console.log); // Expected: "Some error"
rejectWithValueThen(42).catch(error => console.log("Error:", error)); // Expected: 'Error: 42'

/**
 * This function should try to await the rejectWithValueThen() function with the given value and log the error.
 * @param {*} value - The value to reject the promise with.
 */
async function callRejectWithValueAsync(value) {
    // Your code here
}

// Sample Calls
callRejectWithValueAsync("Some error"); // Expected: "Some error"
callRejectWithValueAsync(42); // Expected: 42
