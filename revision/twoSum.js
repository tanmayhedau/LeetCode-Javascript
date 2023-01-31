// function twoSum(nums, target) {
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let sum = nums[i] + nums[j];

//       if (target === sum) {
//         return [i, j];
//       }
//     }
//   } // tc O(n^2)  sc O(1)
// }


//optimised soln.

function twoSum(nums , target){
  let mp = new Map();
  for(let i=0; i<nums.length; i++){
    let sno = target - nums[i]

    if(mp.has(sno)){
      return [i,mp.get(sno)]
    }
    mp.set(nums[i],i)
  }
  return []
}   // tc O(n)  sc O(n)



console.log(twoSum([2, 7, 11, 15], 9));
