function checkForPair(a,target) {
    let i=0;
    let j=a.length-1;
    while(i<j){
        if(a[i]+a[j]==target) return true;
        if(a[i]+a[j]<target) i++;
        else{
            j--;
        }
    }
    return false;
}

let res = checkForPair([1,3,8,13,20,30,70], 29)
console.log(res)