// function largestSumConsecutive(arr, n) {
//   if (n > arr.length) {
//     throw new Error(`${n} is greater than array`);
//   } else {
//     let max = 0;
//     for (let i = 0; i < arr.length - n + 1; i++) {
//       let temp = 0;
//       for (let j = 0; j < n; j++) {
//         temp += arr[i + j];
//       }
//       if (max < temp) {
//         max = temp;
//       }
//     }
//     return max;
//   }
// }
//tc O(mn) sc O(1)

function largestSumConsecutive(arr, n) {
  if (n > arr.length) throw new Error(`${n} is greater than array`);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let max = sum;
  for (let i = n; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - n];

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}   //tc O(n)  sc O(1)

let res = largestSumConsecutive([1, 14, 3, 1, 4, 5, 7, 8], 3);
console.log(res);
