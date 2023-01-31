var search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    //start==>mid
    if (nums[start] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (nums[mid] <= nums[end]) {   //if(nums[start]>nums[end])
      //mid==>end
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
