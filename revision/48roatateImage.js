function rotateClockwise(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix);

  let left = 0;
  let right = matrix[0].length - 1;
  while (left < right) {
    for (let i = 0; i < matrix.length; i++) {
      //swap columns
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
    }
    left++;
    right--;
  }
  return matrix;
}
// tc O(n^2)  sc O(1)

console.log(
  rotateClockwise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function rotateAntiClockwise(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);

  let top = 0;
  let bottom = matrix.length - 1;
  while (top < bottom) {
    for (let i = 0; i < matrix.length; i++) {
      //swap rows
      let temp = matrix[top][i];
      matrix[top][i] = matrix[bottom][i];
      matrix[bottom][i] = temp;
    }
    top++;
    bottom--;
  }
  return matrix;
}
// tc O(n^2)  sc O(1)

console.log(
  rotateAntiClockwise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
