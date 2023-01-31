function maximumSubarray(arr) {
  let max = 0,
    maxsum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = max + arr[i];
    if (max < arr[i]) max = arr[i];
    if (maxsum < max) maxsum = max;
  }
  return maxsum;
}

console.warn(maximumSubarray([-2, 1, 3, -3, 5, 6, 0]));
