//spiral matrix
function spiralOrder(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let size = n * m;
  let res = [];
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = m - 1;

  while (res.length < size) {
    //top boundary
    for (let i = left; i <= right && res.length < size; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    //right boundary
    for (let i = top; i <= bottom && res.length < size; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    //bottom boundary
    for (let i = right; i >= left && res.length < size; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;

    //left boundary
    for (let i = bottom; i >= top && res.length < size; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}
//tc O(n*m)  sc O(n)
console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);
