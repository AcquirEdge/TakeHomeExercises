/**
 * Recursively prints a countdown from n to 1.
 * If n is not a non-zero number, nothing should be printed
 *
 * @param {number} n - The number to start the countdown from.
 */
function countdown(n) {
    // Base case: If n is a non-zero number we simply end the recursion.
    if (n <= 0) {
        return;
    }
    // Recursive case: When n is a non-zero number, we print out the number and recursively run countdown() on n-1
    console.log(n);
    countdown(n - 1);
}

countdown(5); // should print 5, 4, 3, 2, 1
countdown(3); // should print 3, 2, 1
countdown(10); // should print 10, 9, ..., 2, 1
countdown(1); // should print 1
countdown(0); // should not print anything
countdown(-1); // should not print anything
