const jumpGame = (nums) => {
  let n = nums.length;
  let reachable = 0;
  for (let i = 0; i < n; i++) {
    if (reachable < i) return false;
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};

console.log(jumpGame([2, 3, 1, 1, 4]));
