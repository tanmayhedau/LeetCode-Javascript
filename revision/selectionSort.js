function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}   //tc  o(n^2)

console.log(selectionsort([77, 55, 33, 88, 99]));
