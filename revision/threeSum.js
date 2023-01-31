function threeSum(nums, target) {
  let num = nums.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (i == 0 || num[i] != num[i - 1]) {
      let j = i + 1;
      let k = num.length - 1;

      while (j < k) {
        if (num[j] + num[k] == target - num[i]) {
          arr.push([num[i], num[j], num[k]]);

          //handling duplicates
          while (j < k && num[j] == num[j + 1]) j++;
          while (j < k && num[k] == num[k - 1]) k--;

          j++;
          k--;
        } else if (num[j] + num[k] < target - num[i]) {
          j++;
        } else {
          k--;
        }
      }
    }
  }
  return arr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
