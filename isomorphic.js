// Input: s = "egg", t = "add"
// Output: true

const createStringCode = (s) => {
    let map = new Map();
    let id = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], id);
            str = str + id 
            id += 1;
        } else {
            const key = map.get(s[i]);
            str = str + key
        }
    }
    console.log(str)
    return str;
}

const isIsomorphic = (s, t) => {
    return createStringCode(s) === createStringCode(t);
};

// var isIsomorphic = function(s, t) {
//     let obj={}
//     for(let i=0;i<s.length;i++){
//         if(obj[s[i]]){
//             if(obj[s[i]]!=t[i]){
//                 return false
//             }
//         }else{
//             obj[s[i]]=t[i]
//         }
//     }
//         obj={}
//     for(let i=0;i<s.length;i++){
//         if(obj[t[i]]){
//             if(obj[t[i]]!=s[i]){
//                 return false
//             }
//         }else{
//             obj[t[i]]=s[i]
//         }
//     }
//      return true
//  };

let res = isIsomorphic("abc","xyz")
console.log(res)


// let n = 11;
     
// // function returns the Fibonacci number
// function fib(n) {
// if (n <= 1)
//     return n;
// return fib(n-1) + fib(n-2);
// }

// let res= fib(n)
// console.log(res)