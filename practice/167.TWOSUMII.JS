// var sum = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     const sum = arr[start] + arr[end];
//     if (sum === target) {
//       return [start, end];
//     } else if (sum > target) {
//       end--;
//     } else {
//       start++;
//     }
//   }
// };

var sum = (arr, target) => {
  let s = 0,
    e = arr.length - 1;
  while (s < e) {
    const sum = arr[s] + arr[e];
    if (sum == target) return [arr[s], arr[e]];
    else if (sum > target) {
      e--;
    } else {
      s++;
    }
  }
};

console.warn(sum([2, 7, 11, 15], 9));
