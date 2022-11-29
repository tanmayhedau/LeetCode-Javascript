function countUnique(arr) {
  //Write your solution here
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  let count = 0;
  for (let pairs of map) {
    if (pairs[1] === 1) {
      count++;
    }
  }
  return count;
}

console.warn(
  countUnique([
    9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 21, 45, 65, 23, 34, 54, 56,
  ])
);
