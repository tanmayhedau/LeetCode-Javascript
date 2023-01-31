var duplicates = (arr) => {
    let map = new Map();
    for(let i of arr){
        if(map.get(i)){
            return true;
        }else{
            map.set(i,true);
        }
    }
    return false;
}

console.log(duplicates([1,2,3,4]))