function permute(nums) {
  const result = [];

  const dfs = (i, nums) => {
    //base condition
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs recursive
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
}

console.log(permute([1, 2, 3]));
