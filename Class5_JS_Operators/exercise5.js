function isTruthyOrFalsy(val) {
  let result = val ? "truthy" : "falsy";
  return result;
}

console.log(isTruthyOrFalsy(0)); // Outputs: "falsy"
console.log(isTruthyOrFalsy(1)); // Outputs: "truthy"
