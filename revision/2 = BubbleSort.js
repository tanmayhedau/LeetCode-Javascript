function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        if (swap == false) {
            break
        }
    }
}

let arr = [73, 36, 98, 12, 09, 45, 11]
bubble(arr)
console.log(arr)



//Worst TC ==> O(N2)