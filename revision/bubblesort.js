// function bubblesort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// } //tc O(n^2)  sc O(n)

// optimised

function bubblesort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (isSwap === false) {
      break;
    }
  }
  return arr;
}

console.log(bubblesort([6, 7, 8, 4, 3, 5, 1]));
