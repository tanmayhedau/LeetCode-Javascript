// function maximumSubArray(k,arr,n) {
//     let currSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < k; i++) {
//         currSum += arr[i];
//     }
//     maxSum = currSum;
//     for (let i = k; i < n; i++) {
//          currSum += arr[i];
//          currSum -= arr[i-k];
//          maxSum = Math.max(maxSum,currSum);
//     }
//     return maxSum;
// }

// let res = maximumSubArray(2,[100,200,300,400],4)
// console.log(res)


//================brute force ==================================
function maximumSum(arr,p) {
    let max =0;
    let i=0;
    while (i<=arr.length-p) {
        let sum =0;
        let j=i;
        while (j<i+p) {
            sum+= arr[j];
            j++;
        }
        i++;
        max = Math.max(sum,max);
    }
    return max;
}






//=======================o(n)=============================

// function maximumSum(arr,p){
//     let sum =0;
//     let max =0;
    
//     let i=0;
//     while (i<p) {
//         sum+=arr[i];
//         i++;
//     }
//     max=sum;

//     i=p;
//     while (i<arr.length) {
//         sum+= arr[i] -arr[i-p];
//         if(sum>max) max = sum;
//         i++;
//     }
//     return max;
// }

let res1 = maximumSum([100,200,300,400],4);
console.log(res1)



// let num =430043;
// let val = num%10
// console.log(val)