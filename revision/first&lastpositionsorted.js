function first_lastposition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) {
      first = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  left = 0;
  right = nums.length - 1;
  let last = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) {
      last = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [first, last];
}

console.log(first_lastposition([5, 7, 7, 8, 8, 10], 8));


// tc O(log n)  sc O(1)