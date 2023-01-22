function partition(arr, low, high) {
  let pivotelement = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivotelement) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let pivotindex = partition(arr, start, end);
    quickSort(arr, start, pivotindex - 1);
    quickSort(arr, pivotindex + 1, end);
  }
}

let arr = [10, 15, 1, 2, 9, 16, 11];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
// console.log(quickSort(arr));


// function quickSort(arr) {
//   if (arr.length <= 1 ) return arr;
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }