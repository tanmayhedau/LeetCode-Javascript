function largestNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
//tc O(n)   sc O(1)
console.log(largestNumber([4,25,26,7,18,9]));
