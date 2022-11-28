var findDuplicates = (nums) => {
    let ans =[];
    for(let i in nums){
        let index1= Math.abs(nums[i]);
        let index2=index1-1;
        if(nums[index2]<0){
            ans.push(index1);
        }else{
            nums[index2]*=-1;
        }
    }
    return ans;

}

console.warn(findDuplicates([4,3,2,2,3,1]))