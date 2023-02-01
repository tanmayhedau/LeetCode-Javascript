var spiralOrder = function (matrix) {
  let n = matrix.length,
    m = matrix[0].length,
    left = 0,
    top = 0,
    right = m - 1,
    bottom = n - 1,
    size = n * m,
    result = [];

  while (result.length < size) {
    //top
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    //right
    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    //bottom
    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    //left
    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
);
