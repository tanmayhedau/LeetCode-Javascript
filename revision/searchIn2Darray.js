// leetcode 74 and 240 searchMatrix

function searchMatrix(matrix,target){
    let row = 0;
    let col = matrix[0].length-1;
    while(row < matrix.length && col>= 0){
        if(matrix[row][col] == target) return true;
        else if(matrix[row][col] < target) row++;
        else col--;
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],73))