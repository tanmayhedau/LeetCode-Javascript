function primeNumber(n) {
  if (n < 2) return `${n} is not a prime no.`;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime no.`;
    }
  }
  return `${n} is a prime no.`;
}

console.log(primeNumber(17));
