// var countprime = (n) => {
//   let arr = new Array(n);
//   let count = 0;
//   for (let i = 2; i < n; i++) {
//     if (arr[i]) continue;
//     count++;

//     for (let j = i; j * i < n; j++) {
//       arr[j * i] = 1;
//     }
//   }
//   return count;
// };

function countprime(n) {
  let isprime = new Array(n).fill(true);
  let count = 0;
  isprime[0] = false;
  isprime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (!isprime[i]) continue;
    for (let j = i * i; j < n; j = j + i) {
      isprime[j] = false;
    }
  }

  for (let i = 2; i < n; i++) {
    if (isprime[i]) count++;
  }
  return count;
}
console.warn(countprime(10));
//tc= O(n*sqrt(n))
//sc= O(n)
