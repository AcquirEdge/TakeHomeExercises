function isInRange(num, lower, upper) {
  let squared = num ** 2;
  return squared >= lower && squared <= upper;
}

console.log(isInRange(5, 1, 30));  // Outputs: true
console.log(isInRange(25, 1, 400));  // Outputs: false