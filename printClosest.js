function printClosest(arr, k) {
  // let res = [],
  //   proximity = Infinity,
  //   s = 0,
  //   e = arr.length - 1;
  // while (s < e) {
  //   if (Math.abs(arr[s] + arr[e] - k) < proximity) {
  //     res = [arr[s], arr[e]];
  //     s++;
  //     e--;
  //   }
  // }
  // if (arr[s] + arr[e] - k > 0) e = e - 1;
  // else s = s + 1;

  // return res;

  let l = 0;
  let r = arr.length - 1;
  var a;
  var b;

  let diff = Number.MAX_VALUE;
  while (l < r) {
    let pairsum = arr[l] + arr[r];
    currdiff = Math.abs(pairsum - k);
    if (currdiff < diff) {
      diff = currdiff;
      a = arr[l];
      b = arr[r];
    }
    if (arr[l] + arr[r] > k) r--;
    else l++;
  }
  return [a, b];
}



console.warn(printClosest([1, 2, 5, 8, 9, 14], 13));
