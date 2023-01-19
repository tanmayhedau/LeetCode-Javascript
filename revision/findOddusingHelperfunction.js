function findOdd(arr) {
  let res = [];
  function helper(inputarr) {
    if (inputarr.length === 0) {
      return;
    }
    if (inputarr[0] % 2 !== 0) {
      res.push(inputarr[0]);
    }
    helper(inputarr.slice(1));
  }
  helper(arr);
  return res;
}
console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
