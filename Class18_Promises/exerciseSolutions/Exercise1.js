/**
 * This function should return a Promise that resolves after 2 seconds with the message "2 seconds have passed".
 * Implement this function using .then/catch.
 * @returns {Promise<string>} A promise that resolves with the message "2 seconds have passed" after 2 seconds.
 */
function twoSecondDelayThen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('2 seconds have passed'), 2000);
    });
}

// Sample Calls
twoSecondDelayThen().then(console.log); // Expected: '2 seconds have passed'
twoSecondDelayThen().then(response => console.log("Response:", response)); // Expected: 'Response: 2 seconds have passed'

/**
 * This function should await the twoSecondDelayThen() function and log the result.
 */
async function callTwoSecondDelayAsync() {
    let result = await twoSecondDelayThen();
    console.log(result);
}

// Sample Call
callTwoSecondDelayAsync(); // Expected: '2 seconds have passed'
