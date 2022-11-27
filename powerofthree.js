function powerOfThree(n) {
  if (n === 1 || n === 3) return true;
  if (n === 0 || n % 3 != 0) return false;
  return powerOfThree(n / 3);
}
console.log(powerOfThree(27));
console.log(powerOfThree(45));
console.log(powerOfThree(9));
