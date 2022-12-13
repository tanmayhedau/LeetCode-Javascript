const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr, low, high) => {
  let pivot_element = arr[high];

  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot_element) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
};

const kthlargestElement = (arr, low, high, k) => {
  let resultIndex = arr.length - k;

  while (low < high) {
    let pivot_index = partition(arr, low, high);
    if (resultIndex == pivot_index) return arr[pivot_index];

    if (resultIndex < pivot_index) high = pivot_index - 1;
    else low = pivot_index + 1;
  }

  return arr[low];
};



//

//kth smallest-

let arr1 = [3, 2, 1, 5, 6, 4]; 
console.log(kthlargestElement(arr1, 0, 5, 2));


let arr = [3,2,3,1,2,4,5,5,6];
console.log(kthlargestElement(arr,0,8,4))