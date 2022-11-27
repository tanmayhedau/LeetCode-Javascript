// var findDisappearedNumbers = function(nums) {
//     const map = new Map()
//     function find(num, i){
//         map.set(num,i)
//     }
//     nums.forEach(find)

//     const res= []
//     for (let i = 1; i <= nums.length; i++) {
//        if (!map.has(i)) res.push(i);
//     }
//     return res
// };
var findDisappearedNumbers = function(nums) {
    let arr= new Array(nums.length);
    let outputArr =[];
    for(let i=0;i<nums.length;i++){
    arr[nums[i]-1]=0;
    }
    for(let i=0;i<arr.length;i++){
    if(arr[i]==undefined){
    outputArr.push(i+1);
    }
    }
    return outputArr;
    };

let res1 = findDisappearedNumbers([4,3,2,7,8,2,3,1])
console.log(res1)