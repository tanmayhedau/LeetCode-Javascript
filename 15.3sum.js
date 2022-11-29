function threeSum(nums){
    let obj={};
    nums=nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        let j=i+1;
        let k=nums.length-1;
        while(j<k){
            const sum =nums[i]+nums[j]+nums[k];
            if(sum==0){
                obj[[nums[i],nums[j],nums[k]]]=[nums[i],nums[j],nums[k]];
                j++;
                k--;
            }else if(sum>0){
                k--;
            }else if(sum<0){
                j++;
            }
        }
    }
     return (Object.values(obj));
}

let res= threeSum([-1,0,1,2,-1,-4])
console.log(res)




