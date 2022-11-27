function closestSum(arr, n, x) {
  let left = 0;
  let right = n - 1;
  let diff = Number.MAX_VALUE;
  var a,b 

  while (left < right) {
    let sum = arr[left] + arr[right];
    let curr = Math.abs(sum - x);
    if(curr<diff){
        diff = curr
        a=arr[left]
        b=arr[right]
    }
    if (sum > x) right--;
    if (sum < x) left++;
  }
  console.log(a,b)
}

let res = closestSum([10,22,28,29,30,40],6,54)
// console.log(res)
