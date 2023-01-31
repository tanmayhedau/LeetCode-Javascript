function palindromeNumber(x) {
    // const str = x.toString();
    // let i=0;
    // let j=str.length-1;
    // while(i<=j){
    //     if(str[i]!=str[j]) return false;
    //     i++;
    //     j--;
    // }
    // return true;

    let str =String(x)
    if(str.length<=1) return 1
    if(str[0]!=str[str.length-1]) return 0;
    return palindromeNumber(str.slice(1,str.length-1))
}
let res=palindromeNumber(121)
console.log(res)