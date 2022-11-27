function binarySearch(arr, key) {
    let start = 0
    let end = arr.length-1
    

    while (start<=end) {
        let mid = Math.floor(start + (end - start)/2)

        if(arr[mid]==key){
            return mid
        }
        if(key> arr[mid]){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    return -1
}
// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             // found the key
//             return middle;
//         } else if (sortedArray[middle] < key) {
//             // continue searching to the right
//             start = middle + 1;
//         } else {
//             // search searching to the left
//             end = middle - 1;
//         }
//     }
// 	// key wasn't found
//     return -1;
// }
// function main() {
//     let even = [2,4,6,8,10,12]
//     let index = binarySearch(even,6,10)
//     console.log(index)
// }

let res = binarySearch([2,4,6,8,10,12],10)
console.log(res)