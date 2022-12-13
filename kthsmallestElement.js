// //quick select
// const swap = (arr, left, right) => {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//   };

//   const partition = (arr, low, high) => {
//     let pivot_element = arr[high];

//     let i = low - 1;
//     for (let j = low; j < high; j++) {
//       if (arr[j] < pivot_element) {
//         i++;
//         swap(arr, i, j);
//       }
//     }

//     swap(arr, i + 1, high);
//     return i + 1;
//   };

//   const kthsmallestElement = (arr, low, high, k) => {
//       let resultIndex = k - 1;

//       while (low < high) {
//           let pivot_index = partition(arr, low, high);
//           if (resultIndex == pivot_index) return arr[pivot_index];

//           if (resultIndex < pivot_index) high = pivot_index - 1;
//           else low = pivot_index + 1;
//       }

//       return arr[low];
//   };

//merge sort

const conquer = (arr1, arr2) => {
  let res = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

const divide = (arr) => {
  let n = arr.length;
  if (n == 1) return arr;
  let mid = Math.floor(n / 2);
  let l = divide(arr.slice(0, mid));
  let r = divide(arr.slice(mid));
  return conquer(l, r);
};

const kthsmallestElement = (arr, k) => {
  let result = divide(arr);
  return result[k - 1];
};

//kth smallest-
let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6]; //1,2,2,3,3,4,5,5,6
console.log(kthsmallestElement(arr,  4));
