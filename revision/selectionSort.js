// function selectionsort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (i != min) {
//       [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//   }
//   return arr;
// } //tc  o(n^2)

// console.log(selectionsort([77, 55, 33, 88, 99]));

//selection sort
function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      [nums[min], nums[i]] = [nums[i], nums[min]];
    }
  }
  return nums;
}
//tc O(N^2)  sc O(1)

console.log(selectionSort([1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]));
