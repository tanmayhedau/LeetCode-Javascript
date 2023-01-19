//count unique numbers

function countUniqueNumbers(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error(`array is empty`);
  }
}

let res = countUniqueNumbers([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(res);
//tc =O(n)  sc=O(1)
