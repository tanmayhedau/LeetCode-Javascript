const countGoodRectangles = (rectangle) => {
  let max = -Infinity;
  let count = 0;
  for (let [len, width] of rectangle) {
    const square = Math.min(len, width);
    if (square === max) count++;
    if (square > max) {
      max = square;
      count = 1;
    }
  }
  return count;
};

console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);
console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
);
