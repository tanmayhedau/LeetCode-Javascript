var pivotIndex = function(nums) {
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
    }
    let sum2 =0
    for(let j=0; j<nums.length; j++){
        if(sum2 === (sum - nums[j]- sum2)){ return j}
        sum2+= nums[j]
    }
    return -1
};

let res =pivotIndex([1,7,3,6,5,6])
console.log(res)

//=========================================================================================================
let arr = [1,7,3,6,5,6]
function indexs(){
    let sums = 0
    for(let i=0; i<arr.length; i++){
        sums += arr[i]
    }
    let tot =0
    for(let j=0; j<arr.length; j++){
        if(tot === (sums - arr[j] - tot)) return j
        tot += arr[j]
    }
    return -1
}
let res1 = indexs()
console.log(res1)