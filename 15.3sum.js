function threeSum(nums) {
  let n = nums.length;
  let ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let low = i + 1,
        high = n - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        ans.push([nums[i], nums[low], nums[high]]);

        while (nums[low] === nums[low + 1]) low++;

        while (nums[high] === nums[high - 1]) high--;

        low++;
        high--;
      }
      else if (sum > 0) high--;
      else low++;
    }

    if (nums[i] === nums[i + 1]) i++;
  }

  return ans;

  // let obj={};
  // nums=nums.sort((a,b)=>a-b);
  // for(let i=0;i<nums.length;i++){
  //     let j=i+1;
  //     let k=nums.length-1;
  //     while(j<k){
  //         const sum =nums[i]+nums[j]+nums[k];
  //         if(sum==0){
  //             obj[[nums[i],nums[j],nums[k]]]=[nums[i],nums[j],nums[k]];
  //             j++;
  //             k--;
  //         }else if(sum>0){
  //             k--;
  //         }else if(sum<0){
  //             j++;
  //         }
  //     }
  // }
  //  return (Object.values(obj));
}

let res = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);
