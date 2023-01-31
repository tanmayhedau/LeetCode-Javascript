function checkSquare(arr, arr1) {
  if (arr.length != arr1.length) return false;
  let map = {},
    map1 = {};
  for (let val of arr) {
    map[val] = (map[val] || 0) + 1;
  }
  for (let val of arr1) {
    map1[val] = (map1[val] || 0) + 1;
  }
  let keys = Object.keys(map);
  let keys1 = Object.keys(map1);
  for (let i in keys) {
    if (keys1[i] * keys1[i] != keys[i]) {
      return false;
    }
  }
  return true;
}

console.log(checkSquare([36, 1, 25, 4], [5, 1, 6, 2]));
