//rotate matrix by 90 degree

function rotate(matrix) {
  //step 1 take transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      //swap [i][j] with [j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //   [
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [3, 6, 9],
  //   ];

  //step 2 swap columns
  let left = 0;
  let right = matrix[0].length - 1;
  while (left < right) {
    for (let i = 0; i < matrix.length; i++) {
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
    }
    left++;
    right--;
  }
  return matrix;
}

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
