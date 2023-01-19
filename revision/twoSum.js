function twoSum(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = nums[i] + nums[j];

      if (target === sum) {
        return [i, j];
      }
    }
  } // tc O(n^2)  sc O(1)
}

console.log(twoSum([2, 7, 11, 15], 9));
