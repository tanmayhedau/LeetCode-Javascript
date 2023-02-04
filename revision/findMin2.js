//leetcode 154  Find Minimum in Rotated Sorted Array II
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == nums[right]) right = right - 1;
    else if (nums[mid] < nums[right]) right = mid; //right side is sorted
    else if (nums[mid] > nums[right]) left = mid + 1; 
  }
  return nums[left];
}

console.log(findMin([2, 2, 2, 0, 1]));
