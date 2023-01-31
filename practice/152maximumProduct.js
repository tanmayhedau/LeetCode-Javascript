function maximumProduct(nums) {
    let max = min = global = nums[0];
    if(nums.length ===1) return nums[0];
    for(let i=1; i<nums.length; i++) {
        let temp = max*nums[i];
        max=Math.max(temp, min*nums[i],nums[i]);
        min=Math.min(temp,min*nums[i],nums[i]);
        global = Math.max(max,global);
    }
    return global;



    // let maxIdx = minIdx = res = nums[0];
    // for(let num of nums.slice(1)) {
    //     const currMinIdx = Math.min(num, num*maxIdx, num*minIdx);
    //     const currMaxIdx = Math.max(num, num*maxIdx, num*minIdx);
    //     maxIdx = currMaxIdx;
    //     minIdx = currMinIdx;
        
    //     res = Math.max(res,maxIdx);
    // }
    // return res;
}

console.warn(maximumProduct([2,3,-4,-6])) //6
