function findTargetSumWays(nums, target) {
  let res = 0;

  const dfs = (i, nums, target, runningsum) => {
    if (i === nums.length) {
      if (runningsum === target) {
        res++;
      }
      return;
    }

    // dfs recursive

    // includes positive
    runningsum += nums[i];
    dfs(i + 1, nums, target, runningsum);
    runningsum -= nums[i];

    // includes negative
    runningsum -= nums[i];
    dfs(i + 1, nums, target, runningsum);
    runningsum += nums[i];
  };
  dfs(0, nums, target, 0);
  return res;
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
