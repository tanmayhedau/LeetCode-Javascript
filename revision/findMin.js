function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[right];
}
//tc O(log n)  sc O(1)

console.log(findMin([3, 4, 5, 1, 2]));
