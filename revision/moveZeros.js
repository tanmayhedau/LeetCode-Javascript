function movezeros(nums) {
  let n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  for (let i = count; i < n; i++) {
    nums[i] = 0;
  }
  return nums;
}

console.log(movezeros([0, 9, 0, 0, 10]));
