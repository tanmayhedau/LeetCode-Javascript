function largestSumConsecutive(arr, n) {
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let secondmax = 0;
    for (let j = 0; j < n; j++) {
      secondmax += arr[i + j];
    }
    if (secondmax > max) {
      max = secondmax;
    }
  }
  return max;
}

let res = largestSumConsecutive([1, 14, 3, 1, 4, 5, 7, 8], 4);
console.log(res);
//tc O(mn) sc O(1)
