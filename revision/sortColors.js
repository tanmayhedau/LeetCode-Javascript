function sortColors(nums) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;

  while (mid <= high) {
    switch (nums[mid]) {
      case 0: {
        [nums[mid], nums[low]] = [nums[low], nums[mid]];
        mid++;
        low++;
        break;
      }

      case 1:
        mid++;
        break;

      case 2:
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
        break;
    }
  }
  return nums;
}

console.log(sortColors([2, 1, 0, 1, 1, 2, 0]));
