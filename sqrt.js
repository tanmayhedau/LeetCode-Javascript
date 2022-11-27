function mySqrt(x){
    let i =1
    let res =1
    if(x===0 || x===1) return x
    while(res<x){
        i++
        res =i*i
    }
    if(res>x) return i-1
    return i
}

let res1 = mySqrt(9)
console.log(res1)