/**
 * This function reverses a string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
    // Base Case: If the string is empty, return the string;
    if(str === "") {
        return "";
    }
    // Recursive Case: return the last character, plus the reverse of the rest of the string
    return reverseString(str.slice(1)) + str.charAt(0);
}


console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("recursion")); // Output: "noisrucer"
console.log(reverseString("programming")); // Output: "gnimmargorp"
console.log(reverseString("Base Case")); // Output: "esaC esaB"
console.log(reverseString("awesome")); // Output: "emosewa"
console.log(reverseString("")); // Output: "" (empty string)
console.log(reverseString("a")); // Output: "a" (single character string)