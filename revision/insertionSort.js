//insertion sort
function insertionSort(nums){
  for(let i=1; i<=nums.length-1; i++){
    let temp = nums[i];
    let j=i-1;
    while(j>=0 && nums[j]>temp){
      nums[j+1]=nums[j];
      j--;
    }
    nums[j+1]=temp;
  }
  return nums;
}
//tc O(n^2)  sc O(1)

console.log(insertionSort([5,7,3,0,10,9]))



















// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > curr) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = curr;
//   }
//   return arr;
// }

// console.log(insertionSort([5, 4, 8, 9, 2]));
