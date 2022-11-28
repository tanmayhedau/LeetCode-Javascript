var countprime = (n) => {
  let arr = new Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (arr[i]) continue;
    count++;

    for (let j = i; j * i < n; j++) {
      arr[j * i] = 1;
    }
  }
  return count;
};

console.warn(countprime(10));
