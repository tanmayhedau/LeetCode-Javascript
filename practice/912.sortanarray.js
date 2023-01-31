//quick sort

let arr = [1, 5, 4, 2, 6];
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high) => {
  let pivotElement = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivotElement) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};

quickSort(arr, 0, 4);
console.log(arr);

//merge sort

var merge = (arr1,arr2) => {
    let res =[];
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i++]);
            // i++;
        }else{
            res.push(arr2[j++]);
            // j++;
        }
    }

    while(i<arr1.length){
        res.push(arr1[i++]);
        // i++;
    }

    while(j<arr2.length){
        res.push(arr2[j++]);
        // j++;
    }
    return res;
}

var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left,right);
}
