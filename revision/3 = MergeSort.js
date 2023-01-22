
function merge(arr, l, m, r) {
    let n1 = m - l + 1     //Lenght of the rightSide of Array incliding mid
    let n2 = r - m         //Lenght of the rightSide of Array
    let leftArr = new Array(n1)
    let rightArr = new Array(n2)

    for (let i = 0; i < n1; i++) {      //Adding the left side element of main array into leftArray
        leftArr[i] = arr[l + i]
    }

    for (let i = 0; i < n2; i++) {      //Adding the right side element of main array into rightArray
        rightArr[i] = arr[m + 1 + i]
    }
    
    let i = 0                           //Index of leftArray
    let j = 0                           //Index of rightArray
    let k = l                           //Index of main Array

    while (i < n1 && j < n2) {              //This is for compairing the elements of Left Array and Right Array So that we can
        if (leftArr[i] < rightArr[j]) {     //decide which element to put in the main array
            arr[k] = leftArr[i]             
            i++
        } else {
            arr[k] = rightArr[j]
            j++
        }
        k++
    }
    while (i < n1) {                        //If after comparing the elements of both array , elements in the leftArr will be left out then we will simply 
        arr[k] = leftArr[i]                 //put that elemets the main array
        i++
        k++
    }
    while (j < n2) {
        arr[k] = rightArr[j]                //If after comparing the elements of both array , elements in the rightArr will be left out then we will simply 
        j++                                  //put that elemets the main array
        k++
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return
    }
    let m = parseInt((l + r) / 2)
    mergeSort(arr, l, m)
    mergeSort(arr, m + 1, r)
    merge(arr, l, m, r)
}


let arr = [7,3,5,1,3,8,9]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)





//TC==> O(N log N)