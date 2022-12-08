function printClosest(arr, k) {
  let res = [],
    proximity = Infinity,
    s = 0,
    e = arr.length - 1;
  while (s < e) {
    if (Math.abs(arr[s] + arr[e] - k) < proximity) {
      res = [arr[s], arr[e]];
      s++;
      e--;
    }
  }
  if (arr[s] + arr[e] - k > 0) e = e - 1;
  else s = s + 1;

  return res;
}

// function printClosest(arr, k) {
//     let res = [],
//       proximity = Infinity,
//       s = 0,
//       e = arr.length - 1;
//     while (s < e) {
//       if (arr[s] + arr[e]-k<proximity) {
//         res=[arr[s], arr[e]]
//         e--
//         s++
//       }else if((arr[s]+arr[e])>k){
//         e--
//       }else{
//         s++
//       }
//     }

//     return res;
//   }

console.warn(printClosest([1, 2, 5, 8, 9, 14], 12));
