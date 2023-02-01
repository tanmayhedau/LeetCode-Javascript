function generatematrix(n) {
  let left = 0,
    top = 0,
    right = n - 1,
    bottom = n - 1,
    res = [],
    val = 1;
  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  while (left <= right && top <= bottom) {
    //left to right
    for (let i = left; i <= right; i++) {
      res[top][i] = val++;
    }
    top++;

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      res[i][right] = val++;
    }
    right--;

    //right to left
    for (let i = right; i >= left; i--) {
      res[bottom][i] = val++;
    }
    bottom--;

    //bottom to top
    for (let i = bottom; i >= top; i--) {
      res[i][left] = val++;
    }
    left++;
  }
  return res;
}

console.log(generatematrix(3));

//t O(n^2)  sc O(1)
