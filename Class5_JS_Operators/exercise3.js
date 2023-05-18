function calculateSimpleInterest(P, r, t) {
  let total = 0;
  total += P;
  total *= r;
  total *= t;
  total += P;
  return total;
}

console.log(calculateSimpleInterest(1000, 0.05, 5));  // Outputs: 1250