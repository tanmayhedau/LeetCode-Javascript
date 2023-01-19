function binarysearchAlgo(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === n) return mid;
    else if (arr[mid] > n) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

let res = binarysearchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(res);
//tc O(log n)  sc O(1)
