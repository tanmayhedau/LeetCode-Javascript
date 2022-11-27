function climbStairs(n){
    let arr = [1,1]
    for (let index = 2; index <= n; index++) {
        const element = arr[0] + arr[1];
        arr[0] = arr[1]
        arr[1] = element
    }
    return arr[1]
}

let res = climbStairs(3)
console.log(res)