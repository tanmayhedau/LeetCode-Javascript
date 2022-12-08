function sort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = sort(arr.slice(0, mid));
  let right = sort(arr.slice(mid));

   merge(left, right);
   
}

function merge(arr1, arr2) {
  let i = 0,
    j = 0,
    res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }
  }
  return res
}

console.log(sort([5,4,6,7,2,8]))