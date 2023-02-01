function missingNumber(nums) {
  let n = nums.length;

  for (let i = 0; i < n; ) {
    let correctidx = nums[i];
    if (nums[correctidx] != nums[i]) {
        //swap if num is not on correctidx
      let temp = nums[i];
      nums[i] = nums[correctidx];
      nums[correctidx] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i) {
      return i;
    }
  }
  return n;
}
console.log(missingNumber([ 1]));

//cyclic sort [0,n]
