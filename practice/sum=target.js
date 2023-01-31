function sum(nums, k) {
  let res = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let rem = k - num;
    if (map.has(rem) && !res.includes(rem)) {
      res.push(rem, num);
    }
  }
  return res;
}

console.log(sum([1, 2, 3, 6, 2, 4, 3, 4, 0], 4));

