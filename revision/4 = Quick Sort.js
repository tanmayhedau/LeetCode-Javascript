function position(arr,lb,ub){
    let pivot=arr[lb]
    let left=lb
    let right=ub
    while(left<right){
        while(arr[left]<=pivot){
            left++
        }

        while(arr[right]>pivot){
            right--
        }

        if(left<right){
            let temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
        }
    }
    arr[lb]=arr[right]
    arr[right]=pivot
    return right
}

function quickSort(arr,lb,ub){
    if(lb<ub){
        let location=position(arr,lb,ub)
        quickSort(arr,lb,location-1)
        quickSort(arr,location+1,ub)
    }
}

let arr=[10,15,1,2,9,16,11]
quickSort(arr,0,arr.length-1)
console.log(arr)



//Best Case ==> O(N log N)
//Average Case ==> O(N log N)
//Worst Case ==> O(N2)