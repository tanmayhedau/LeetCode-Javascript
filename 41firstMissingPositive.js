var firstMissingPositive = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else i++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return i + 1;

  // let n = nums.length;
  // let ele;
  // let ind;
  // let temp;
  // for (let i = 0; i < n; i++) {
  //   if (nums[i] >= 1 && nums[i] <= n) {
  //     ele = nums[i];
  //     ind = ele - 1;

  //     if (nums[ind] != ele) {
  //       temp = nums[ind];
  //       nums[ind] = ele;
  //       nums[i] = temp;
  //       i--;
  //     }
  //   }
  // }
  // for(let i=0; i<n; i++) {
  //   if(nums[i] != i+1){
  //       return i+1
  //   }
  // }
  // return n+1
};
console.log(firstMissingPositive([[1, 2, 0]]));
