function checkSquare(arr,arr1){
    let map ={}, map1={}
    for(let val of arr){
        map[val] = (map[val] || 0)+1
    }
    for(let val of arr1){
        map[val] = (map[val] || 0)+1
    }
    let keys = Object.keys(map)
    for(let i in keys.length){
        if(map1[keys[i] * keys[i]] !== map[keys[i]]){
            return false;
        }
    }
    return true;
}

console.log(checkSquare([5,2,3,6],[36,9,25,4]))