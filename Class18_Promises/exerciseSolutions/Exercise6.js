/**
 * This function should return a Promise that resolves after a random delay (between 1 and 5 seconds) with a message stating how many seconds have passed.
 * Implement this function using .then/catch.
 * @returns {Promise<string>} A promise that resolves with a message stating how many seconds have passed after a random number of seconds.
 */
function randomDelayThen() {
    let delay = Math.floor(Math.random() * 5) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(delay + " seconds have passed"), delay * 1000);
    });
}

// Sample Calls
randomDelayThen().then(console.log); // Expected: 'X seconds have passed'
randomDelayThen().then(response => console.log("Response:", response)); // Expected: 'Response: X seconds have passed'

/**
 * This function should await the randomDelayThen() function and log the result.
 */
async function callRandomDelayAsync() {
    let result = await randomDelayThen();
    console.log(result);
}

// Sample Call
callRandomDelayAsync(); // Expected: 'X seconds have passed'

/**
 * This function should call 'randomDelayThen()' n times asychronously.
 * This means that all the delays should begin at the same time due to asynchronous programming.
 * For example, if we run it 3 times, with the delays 1, 2, and 3 seconds, then after 1 second, we should see
 * that 1 second has passed. Then after 1 more second, we should see that 2 seconds have passed.
 * Finally, after 1 more second, we should see that 3 seconds have passed.
 * @param {*} n - The number of times to call 'randomDelayThen()'
 */
async function callRandomDelayAsync(n) {
    for(let i = 0; i < n; i++){
        let result = await randomDelayThen();
        console.log(`Call ${i+1}: ${result}`);
    }
}

callRandomDelayAsync(3);


/**
 * This function should call 'randomDelayThen()' n times sequentially.
 * This means that instead of all the delays beginning at the same time due to asynchronous programming, 
 * the delays should only begin after the previous one has ended.
 * For example, if we run it 3 times, with the delays 1, 2, and 3 seconds, then after 1 second, we should see
 * that 1 second has passed. Then after 2 more seconds, we should see that 2 seconds have passed.
 * Finally, after 3 more seconds, we should see that 3 seconds have passed.
 * @param {*} n - The number of times to call 'randomDelayThen()'
 */
async function callRandomDelaySequential(n) {
    for(let i = 0; i < n; i++){
        let result = await randomDelayThen();
        console.log(`Call ${i+1}: ${result}`);
    }
}

callRandomDelayAsyncSequential(3);
