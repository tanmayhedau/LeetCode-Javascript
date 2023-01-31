// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

let nums = [1,1,1,1,1]
function sum(){
let sum =0
let emp =[]
for(let i=0; i<nums.length; i++){
 sum += nums[i]
 emp.push(sum)
}
return emp
}
let res = sum()
console.log(res)