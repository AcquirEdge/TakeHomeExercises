/**
 * Recursively checks if a string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    // Base Case: If a string is empty or is one character long, it is automatically a palindrome
    if(str.length <= 1){
        return true;
    }
    // Recursive Case: If a string is longer than 1 character, if the first and last characters aren't the same, it is not a palindrome
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    // If the first and last characters are the same, check if the remaining string is a palindrome
    return isPalindrome(str.slice(1, str.length - 1))
}

console.log(isPalindrome("racecar")); // should return true
console.log(isPalindrome("hello")); // should return false
console.log(isPalindrome("madam")); // should return true
console.log(isPalindrome("kayak")); // should return true
console.log(isPalindrome("repaper")); // should return true
console.log(isPalindrome("recursion")); // should return false
console.log(isPalindrome("")); // edge case: should return true
console.log(isPalindrome("a")); // edge case: should return true
