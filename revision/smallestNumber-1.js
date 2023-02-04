// function smallestNumber(n) {
//   let str = "";
//   for (let d = 9; d >= 2; d--) {
//     while (n % d === 0) {
//       n = n / d;
//       str = d + str;
//     }
//   }
//   if (n != 1) {
//     return -1;
//   } else {
//     return parseInt(str);
//   }
// }

function smallestNumber(n) {
  let str = "";
  for (let div = 9; div >= 2; div--) {
    while (n % div === 0) {
      n = n / div;
      str = div + str;
    }
  }
  if (n != 1) {
    return - 1;
  } else {
    return parseInt(str);
  }
}

console.log(smallestNumber(100));

// 2-9 nos.
//tc O(log 2 N)
//sc O(1)
//smallest number whose product of digit is n
