// function getSumpairZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// } tc= O(N^2)    sc=O(N)

function getSumpairZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) right--;
    else left++;
  }
}  //tc = O(n) sc=O(1)

let res = getSumpairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);
