function findDuplicateNumber(nums) {
    let fast = nums[0];
    let slow = nums[0];

    do{
        fast = nums[nums[fast]];
        slow = nums[slow];
    }while(slow != fast)

    fast = nums[0];

    while(slow != fast){
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;

}

console.log(findDuplicateNumber([1,3,4,2,2]));   //[1,n]
