function printPrimeNumber(l, r) {
  let prime = [];
  let consonent = [];
  for (let i = l; i <= r; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0 && i > 1) {
      prime.push(i);
    } else {
      consonent.push(i);
    }
  }
  prime[prime.length] = [prime.length];
  consonent[consonent.length] = [consonent.length];
  console.log(prime, consonent);
}

printPrimeNumber(0, 100);
