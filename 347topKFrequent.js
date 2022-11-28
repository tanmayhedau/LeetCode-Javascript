var topKFrequent = (nums,k) => {
    let map ={};
    for(let i of nums){
        if(!map[i]){
            map[i]=1;
        }else{
            map[i]++;
        }
    }

    let bucket =[];
    for(let i=0; i<= nums.length; i++){
        bucket.push([]);
    }

    for(let key in map){
        let count = map[key];
        bucket[count].push(key);
    }

    let res =[];
    for(let i=bucket.length-1; i>=0; i--){
        if(bucket[i].length===0){
            continue;
        }else{
            res=[...res,...bucket[i]];
        }
    }
    return res.slice(0,k);
}

console.warn(topKFrequent([1,1,1,2,2,3],2))