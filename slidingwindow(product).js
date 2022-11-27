function maximumProduct(k, arr, n) {
  let currPro = 1;
  let maxPro = 1;
  for (let i = 0; i < k; i++) {
    currPro *= arr[i];
  }
  maxPro = currPro;
  for (let i = k; i < n; i++) {
    currPro *= arr[i];
    currPro /= arr[i - k];
    maxPro = Math.max(maxPro, currPro);
  }
  return maxPro;
}

let res = maximumProduct(2, [12, 63, 2, 49], 4);
console.log(res);

function solution(str, k) {
  if (str.length == 0) {
    return 0;
  }
  let map = new Map();
  let j = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }

    while (map.size > k && j <= i) {
      if (map.get(str[j]) <= 1) {
        map.delete(str[j]);
      } else {
        map.set(str[j], map.get(str[j]) - 1);
      }
      j++;
    }
    count += i - j + 1;
  }
  return count;
}
