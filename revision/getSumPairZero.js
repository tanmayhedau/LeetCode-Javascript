// function getSumPairZero(arr) {
//   for (let num of arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (num + arr[i] === 0) {
//         return [num, arr[i]];
//       }
//     }
//   }
// }   // tc O(n^2)   sc  O(1)

//optimised

function getSumPairZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
    else if (arr[left] + arr[right] > 0) right--;
    else left++;
  }
}  //tc O(n)  sc O(1)

console.log(getSumPairZero([-4, -2, -1, 0, 2, 4]));
