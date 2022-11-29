let arr = [12, 34, 10, 16, 40];
let sum = 0,
  max = 0,
  smax = 0,
  tmax = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    tmax = max;
    smax = max;
    max = arr[i];
  } else if (arr[i] > smax) {
    tmax = max;
    smax = arr[i];
  } else if (arr[i] > tmax) {
    tmax = arr[i];
  }
}
sum = max + smax + tmax;
console.log(sum, "=>", max, smax, tmax);
