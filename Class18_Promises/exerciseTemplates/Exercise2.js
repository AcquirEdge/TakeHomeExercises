/**
 * This function should return a Promise that resolves after the specified number of seconds with a message stating how many seconds have passed.
 * Implement this function using .then/catch.
 * @param {number} seconds - The number of seconds to delay.
 * @returns {Promise<string>} A promise that resolves with a message stating how many seconds have passed after the specified number of seconds.
 */
function delayForSecondsThen(seconds) {
    // Your code here
}

// Sample Calls
delayForSecondsThen(1).then(console.log); // Expected: '1 seconds have passed'
delayForSecondsThen(3).then(response => console.log("Response:", response)); // Expected: 'Response: 3 seconds have passed'

/**
 * This function should await the delayForSecondsThen() function with the given seconds and log the result.
 * @param {number} seconds - The number of seconds to delay.
 */
async function callDelayForSecondsAsync(seconds) {
    // Your code here
}

// Sample Call
callDelayForSecondsAsync(1); // Expected: '1 seconds have passed'
callDelayForSecondsAsync(3); // Expected: '3 seconds have passed'
