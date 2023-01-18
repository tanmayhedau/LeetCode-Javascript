function twoSum(nums, target) {
  //   let n = nums.length;
  //   for (let i = 0; i < n; i++) {
  //     for (let j = i + 1; j < n; j++) {
  //       let sum = nums[i] + nums[j];

  //       if (target === sum) {
  //         return [i, j];
  //       }
  //     }
  //   }   // tc O(n^2)  sc O(1)

  //optimised

  let n = nums.length;
  let mp = {};
  for (let i = 0; i < n; i++) {
    let value = nums[i];
    let complementPair = target - value;

    if (mp[complementPair]) {
      return [mp[complementPair], i];
    } else {
      mp[value] = i;
    }
  }  // tc  O(n)   sc O(n)
}

console.log(twoSum([3, 2, 4], 6));
