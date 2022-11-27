function validPalindrome(s){
    let i=0;
    let j=s.length-1;
    let count1 =0;
    let count2 =0;
    while(i<=j){
        if(s.charAt(i)==s.charAt(j)){
            i++;
            j--;
        }else{
            count1++;
            i++;
        }
    }
    i=0;
    j=s.length-1;
    while(i<=j){
        if(s.charAt(i)==s.charAt(j)){
            i++;
            j--;
        }else{
            count2++;
            j--;
        }
    }
    return count1>1 && count2>1 ? false: true
}

let res =validPalindrome("aba")
console.log(res)