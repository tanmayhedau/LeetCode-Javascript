function divisorSubstring(nums, k) {
  let num = nums.toString();
  let str = "" + num[0];
  // console.log(str)
  let i = 1;
  let j = 1;
  let count = 0;
  while (i <= num.length) {
    if (str.length == k) {
      if (num % str == 0) {
        count++;
      }
      str = num[j];
      j++;
      i = j;
    } else str += num[i++];
  }
  return count;
}

let res = divisorSubstring(240, 2);
console.log(res);

