let array = [4, 3, 2, 7, 9, 10, 1];
let sortedArr = [];
let i = 0;
let j = 1;

function isSorted(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}

function sorting(arr) {
  if (isSorted(arr)) {
    sortedArr = arr;
    return;
  } else if (arr[i] < arr[j]) {
    i++;
    j++;
    sorting(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sorting(arr);
  }
}

sorting(array);
console.log(sortedArr);
