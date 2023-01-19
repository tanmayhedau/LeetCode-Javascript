// function issquareCheck(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
//tc O(n^2) sc O(1)

// optimised code
function issquareCheck(arr1, arr2) {
  let mp1 = {};
  let mp2 = {};

  for (let val of arr1) {
    mp1[val] = (mp1[val] || 0) + 1;
  }

  for (let val of arr2) {
    mp2[val] = (mp2[val] || 0) + 1;
  }

  for (let key in mp1) {
    if (!mp2[key * key]) {
      return false;
    }

    if (mp1[key] !== mp2[key * key]) {
      return false;
    }
  }
  return true;
} //tc O(n)  sc O(n)

let res = issquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(res);
