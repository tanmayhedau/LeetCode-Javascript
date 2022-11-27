function generate(numsRow) {
    let triangle = [];
    for (var i = 0; i < numsRow; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;
        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
        triangle[i][i] = 1;
    }
    return triangle;
}

let res = generate(5)
console.log(res)