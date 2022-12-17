var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    let sum =0;
    nums=nums.sort((a,b)=> a-b);
    for(let first =0; first<nums.length-2; first++){
        let second=first+1;
        let last=nums.length-1;

        while(second<last){
            let currSum = nums[first]+nums[second]+nums[last];
            let diff = Math.abs(target-currSum);

            if(diff<closest){
                closest=diff;
                sum=currSum;
            }
            if(currSum>target){
                last--;
            }else{
                second++;
            }
        }  
    }
    return sum
};


console.warn(threeSumClosest([-1,2,1,-4],1))