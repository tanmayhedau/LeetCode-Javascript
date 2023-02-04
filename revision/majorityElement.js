// function majorityElement(nums) {
//   let n = nums.length;
//   let candidate = nums[0];
//   let count = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == candidate) {
//       count++;
//     } else {
//       count--;
//     }

//     if (count == 0) {
//       candidate = nums[i];
//       count = 1;
//     }
//   }

//   count = 0;
//   for (let val of nums) {
//     if (val == candidate) {
//       count++;
//     }
//   }

//   if (count > n / 2) {
//     return candidate;
//   } else {
//     return -1;
//   }
// }

function majorityElement(nums) {
  //moore's voting algo
  let candidate = nums[0];
  let votes = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == candidate) {
      votes++;
    } else {
      votes--;
    }

    if (votes == 0) {
      candidate = nums[i];
      votes++;
    }
  }

  let count = 0;
  for (let val of nums) {
    if (val == candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  } else {
    return -1;
  }
}

console.log(
  majorityElement([
    4, 4, 6, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 345, 4, 5, 4,
    47, 7, 4,
  ])
);

// tc O(n)   sc O(1)  moore voting algo
