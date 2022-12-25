//arr= [3,30,34,5,9]  //9534330


function largestNum (arr) {
    let sortNum= arr.sort((a,b)=>{
        let x = a.toString() +b.toString() //3030
        // console.log(x, "X")

        let y = b.toString() + a.toString()
        // console.log(y, "Y")

        return y-x;
    })

    let merge = sortNum.join('')
    if(!parseInt(merge)){
        return false
    }else{
        return merge
    }

}

console.log(largestNum ([30,30,30]))

//tc==> O(nlog n)
//sc==> O(1)