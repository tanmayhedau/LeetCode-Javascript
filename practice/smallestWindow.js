const MAX_CHARS = 256;

function solution(str) {
  let n = str.length;

  let count1 = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else map.set(str[i], 1);
  }

  count1 = map.size;
  let size = Number.MAX_VALUE;
  let res;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let visited = new Array(MAX_CHARS).fill(0);
    let subStr = "";
    for (let j = i; j < n; j++) {
      if (visited[str.charCodeAt(j)] == 0) {
        count++;
        visited[str.charCodeAt(j)] = 1;
      }
      subStr += str[j];
      if (count == count1) break;
    }
    if (subStr.length < size && count == count1) {
      res = subStr;
      size = res.length;
    }
  }
  return size;
}
console.log(solution("aabbabc"))

//two pointer approach only if alphabets are sorted

// function smallestWindow(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (str[left] == str[left + 1] && left < right) left++;
//   while (str[right] == str[right - 1] && left < right) right--;
//   return right - left + 1;
// }
// console.log(smallestWindow("aabbabc"));
