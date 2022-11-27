var peakElement = (nums) => {
    let l=0;
    let r=nums.length-1;
    while(l<r){
        const mid = Math.floor((l+r)/2);
        if(nums[mid]<nums[mid+1]){
            l=mid+1;
        }else{
            r=mid;
        }
    }
    return l;
}

console.warn(peakElement([10,20,30,10]))