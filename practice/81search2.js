var search = (nums,target) => {
    let l=0 , r=nums.length-1;
    while(l<=r){
        const mid = Math.floor((r+l)/2);
        if(nums[mid]===target) return true;

        if(nums[l]<=nums[r]){
            if(target>=nums[l] && target < nums[mid]){
                r=mid-1;
            }else{
                l=mid-1;
            }
        }else if(nums[l]>nums[r]){
            if(target>nums[mid] && target<=nums[r]){
                l=mid+1;
            }else{
                r=mid-1;
            }
        }else{
            l++;
        }
    }
    return false;
}

console.log(search([2,5,6,0,0,1,2],7))