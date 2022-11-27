var sum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === target) {
      return [start, end];
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

console.warn(sum([2, 7, 11, 15], 9));

 
