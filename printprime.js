function eratosthenes(n) {
    let arr=[], upperLimit = Math.sqrt(n), outPut =[];

    for(let i=0; i<n; i++){
        arr.push(true)
    }

    for(let i=2; i<=upperLimit; i++){
        if(arr[i]){
            for(let j=i*i ; j<n ; j+=i){
                arr[j] = false;
            }
        }
    }

    for(let i=2; i<n; i++){
        if(arr[i]){
            outPut.push(i);
        }
    }
    return outPut;
}

console.warn(eratosthenes(10))