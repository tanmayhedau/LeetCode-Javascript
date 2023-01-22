function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i]
        let j = i - 1
        while (arr[j] > cur && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = cur
    }

}


let arr = [9, 4, 2, 8, 1, 0]
insertionSort(arr)
console.log(arr)


// worst Time Complexity ==> O(n2)


RahualSinghdd
{
    R:[F,0]
}