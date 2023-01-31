function isPrime(n){
    if(n<2) return false;
    for(let i=2; i<=Math.sqrt(n) ; i++){
        if(n%i==0) return false
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(6))
console.log(isPrime(22))

// function seiveOfEratosthenes(n) {
//     prime = Array.from({ length: n + 1 }, (_, i) => true);
//     console.log(prime);
//     for (p = 2; p * p <= n; p++) {
//       //if prime[p] is not changed then it is a prime
//       if (prime[p] == true) {
//           //update all multiple of p
//         for (i = p * 2; i <= n; i += p) {
//           prime[i] = false;
//         }
//       }
//     }
//     // console.log(prime)
//     //print all prime numbers
//     let res = [];
//     for (i = 2; i <= n; i++) {
//       if (prime[i] == true) {
//         res.push(prime[i]);
//       }
//     }
//     return res.length;
//   }

//   console.log(seiveOfEratosthenes(10));

// var seiveOfEratosthenes = function (n) {
//   // Eratosthenes algorithm to find all primes under n
//   let arr = [],
//     upperLimit = Math.sqrt(n),
//     res = [];

//   // Make an array from 2 to (n - 1)
//   for (let i = 0; i < n; i++) {
//     arr.push(true);
//   }

//   // Remove multiples of primes starting from 2, 3, 5,...
//   for (let i = 2; i <= upperLimit; i++) {
//     if (arr[i]) {
//       for (let j = i * i; j < n; j += i) {
//         arr[j] = false;
//       }
//     }
//   }

//   // All array[i] set to true are primes
//   for (let i = 2; i < n; i++) {
//     if (arr[i]) {
//       res.push(i);
//     }
//   }

//   return res;
// };
// console.log(seiveOfEratosthenes(10));
