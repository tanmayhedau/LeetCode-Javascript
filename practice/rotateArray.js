// var cyclicRotate = function (nums, d) {
//   let l = 0;
//   let r = nums.length - 1;
  
//     d = d % nums.length;
 
//     while (l < r) {
//       [nums[l], nums[r]] = [nums[r], nums[l]];
//       l++;
//       r--;
//     }
//   }

//   l = 0;
//   r = d - 1;
//   while (l < r) {
//     [nums[l], nums[r]] = [nums[r], nums[l]];
//     l++;
//     r--;
//   }

//   l = d;
//   r = nums.length - 1;
//   while (l < r) {
//     [nums[l], nums[r]] = [nums[r], nums[l]];
//     l++;
//     r--;
//   }
//   return nums;

  // const reverse = (l, r) => {
  //     while (l < r) {
  //         // [nums[l], nums[r]] = [nums[r], nums[l]];
  //         nums[l] = nums[l] + nums[r];
  //         nums[r] = nums[l] - nums[r];
  //         nums[l] = nums[l] - nums[r];
  //         l++;
  //         r--;
  //     }
  // }

  // d = d % nums.length;

  // reverse(0, nums.length - 1);
  // reverse(0, d - 1);
  // reverse(d, nums.length - 1);
// };

function cyclicRotate(array, numRotations) {
  // base case: if numRotations is 0, return the original array
  if (numRotations === 0) {
    return array;
  }

  // remove the last element of the array and store it in a variable
  const last = array.pop();

  // insert the last element at the beginning of the array
  array.unshift(last);

  // call the function again with numRotations decremented by 1
  return cyclicRotate(array, numRotations - 1);
}


let nums = [12, 3, 6, 2, 9, 11];
let d = 2;
console.log(cyclicRotate(nums, d));
