// let arr=[3, 34, 4, 12, 5, 2]
// let val =12
// function findSum(arr,val){
//     let sum=0
//     let i=0
//     let j=0
//     let result=[]
//     while(j<arr.length){
//         if(sum==val){
//             console.log(sum,i,j)
//             return result
//         }else if(sum<val){
//             sum=sum+arr[j]
           
//             j++
//         }else if(sum>val){
//             sum=sum-arr[i]

//             i++
//         }
//     }
//     return -1
// }

// console.log(findSum(arr,val))



// // if(true){
// //     var md="MSD"
// // }
// // md="RSD"
// // console.log(md)

// // function solution(str){
// //     let left=0;
// //     let right=str.length-1;
// //     while(str[left] == str[left+1] && left < right) left++;
// //     while(str[right] == str[right-1] && left < right) right--;
// //     return right-left+1;
// // }

// // let str="aabbcc"

// // console.log(solution(str))


// function check(){
//     var mental="MSD"
// }
// check()
// console.log(mental)

var frequencySort = function(s) {
    let obj={}
    for(let ele of s){
        obj[ele]=obj[ele]+1||1
    }
    let arr=[]
    let i=1
    for(let ele in obj){
        // console.log(obj[ele])
        arr[obj[ele]]=(arr[obj[ele]]) ? arr[obj[ele]]+ele : ele
    }
    // console.log(arr)
    let str=arr[1]
    for(let i=2;i<arr.length;i++){
        let char=arr[i]
        let charLen=arr[i].length
        // console.log(charLen)
        for(let a=0;a<char.len;a++){
            for(let j=1;j<=i;j++){
                str=str+char[a]
            }

        }
    }
        return str
};

console.log(frequencySort("tree"))