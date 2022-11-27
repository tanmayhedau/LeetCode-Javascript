var reverseString = function(s) {
    // for (let i = 0; i < (s.length - 1) / 2; i++) {  
    //     const lastIndex = s.length - 1 - i; 
    //     [s[i], s[lastIndex]] = [s[lastIndex], s[i]] 
    // }
    let start =0;
    let end = s.length-1;
    while(start<end){
        s[start] = s[start].concat(s[end]);
        // console.log(s[start])
        s[end] = s[start].slice(0,1);
        s[start] = s[start].slice(1,);
        start++;
        end--;
    }
    return s;
};

console.log(reverseString([ 'h', 'e', 'l', 'l', 'o' ]))

// const reverseString = (s) => {
//     let start = 0, end = s.length - 1;
//     while (start < end) {
//       [s[start], s[end]] = [s[end], s[start]]; // swap
//       start++, end--;
//     }
//     return s;
//   };