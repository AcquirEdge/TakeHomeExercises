/**
 * Recursively computes the sum of an array of integers.
 *
 * @param {number[]} arr - The array to sum.
 * @returns {number} - The sum of the array elements.
 */
function sumArray(arr) {
    // Base Case: When the array is empty, the sum must be 0
    if(arr.length === 0) {
        return 0;
    }
    // Recursive Case: When the array is non-empty, add the first element to the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // should return 15
console.log(sumArray([10, 20, 30])); // should return 60
console.log(sumArray([3, 3, 3, 3])); // should return 12
console.log(sumArray([1])); // should return 1
console.log(sumArray([-1, 1])); //  should return 0
console.log(sumArray([])); //  should return 0
