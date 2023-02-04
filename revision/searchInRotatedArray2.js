function searchInRotatedArray2(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) return true;

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if(nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }else{
        //nums[mid]=num[left]=nums[right]
        // left++;
        right--;
    }
  }
  return false;
}

console.log(searchInRotatedArray2([4, 5, 6, 7, 0, 1, 2], 0));
