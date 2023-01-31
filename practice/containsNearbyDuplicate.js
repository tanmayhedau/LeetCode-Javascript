function containsNearbyDuplicate(nums,k){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            let j = map.get(nums[i]);

            if(Math.abs(j-i)<= k){
                return true
            }
        }
        map.set(nums[i], i)
    }
    return false
}

let res = containsNearbyDuplicate([1,2,3,1,2,3], 2)
console.log(res)