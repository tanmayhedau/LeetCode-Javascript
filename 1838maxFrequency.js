var maxFrequency = (nums,k) => {
    nums=nums.sort((a,b)=> a-b);
    let left=0, right=0, maxFreq=0, totalSum=0;

    while(right<nums.length){
        totalSum+=nums[right];

        while(nums[right]*(right-left+1)>totalSum+k){
            totalSum-=nums[left];
            left++;
        }
        maxFreq=Math.max(maxFreq, right-left+1);
        right++;
    }
    return maxFreq;
}

console.warn(maxFrequency([1,4,8,13],5))