let arr = [12, 34, 10, 16, 40];
let sum = 0,
  max = 0,
  smax = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    smax = max;
    max = arr[i];
  } else if (arr[i] > smax) {
    smax = arr[i];
  }
  sum = max + smax;
}
console.log(sum);
console.log(max,smax);
