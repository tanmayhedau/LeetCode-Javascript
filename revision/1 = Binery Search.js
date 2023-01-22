//Binary Search is only applicable in sorted Arrays

//Here we need to find the starting and ending position of a given target value.

function binarySearch(arr,val,left,right){
    // let mid= left + Math.floor((right - left) / 2)
    let mid= left+Math.floor((right-left)/2)

    if(arr[mid]==val){
        let l=mid
        let r=mid
        while(arr[r]==arr[mid]){
            r++
        }
        while(arr[l]==arr[mid]){
            l--
        }
        console.log(l+1,r-1)
        return r-l-1
    }else if(arr[mid]>val){
        return binarySearch(arr,val,left,mid-1)
    }else if(arr[mid]<val){
        return binarySearch(arr,val,mid+1,right)
    }
}

let arr=[22,47,56,87,99,100,100,100,100,100,100,100,111,111,111,124]
console.log(binarySearch(arr,111,0,arr.length-1))