// function countingSort(arr) {
//   var helper = []; // This helper will note how many times each number appeared in the arr
//   // Since JS arrary is an object and elements are not continuously stored, helper's Space Complexity minor that n
//   for (var i = 0; i < arr.length; i++) {
//     if (!helper[arr[i]]) {
//       helper[arr[i]] = 1;
//     } else {
//       helper[arr[i]] += 1;
//     }
//   }

//   var newArr = [];
//   for (i in helper) {
//     while (helper[i] > 0) {
//       newArr.push(parseInt(i));
//       helper[i]--;
//     }
//   }
//   return newArr;
// }

// var arr = [5, 4, 3, 2, 1, 0];
// console.log(countingSort(arr));


