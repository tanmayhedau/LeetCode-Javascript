function smallestNumber(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//tc O(n)  sc O(1)

console.log(smallestNumber([77, 88, 0.99, 566, 82, 10]));
