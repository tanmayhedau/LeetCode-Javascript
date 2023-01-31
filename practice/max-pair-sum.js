// function solution(arr) {
//   //Write your solution here
//   let first = 0;
//   let second = 0;
//   if (arr[0] > arr[1]) {
//     first = arr[0];
//     second = arr[1];
//   }
//   if (arr[0] < arr[1]) {
//     first = arr[1];
//     second = arr[0];
//   }
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] != first) {
//       second = arr[i];
//     }
//   }
//   return first + second;
// }

//=======
// function solution(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       i = -1;
//     }
//   }
//   max = arr[arr.length - 1] + arr[arr.length - 2];
//   return max;
// }

var solution = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    //sorting
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
  }
  max = arr[arr.length - 1] + arr[arr.length - 2];
  return max;
};

let res = solution([1, 2, 3, 89, 4, 10]);
console.log(res);
