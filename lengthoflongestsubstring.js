var lengthOfLongestSubstring = function(s) {
    let start =0;
    let end = 0;
    let maxlength = 0;
    let unique = new Set();
    while(end<s.length){
        if(!s) return 0;
        if(!unique.has(s[end])){
            unique.add(s[end]);
            end++;
            maxlength = Math.max(maxlength, unique.size);
        }else{
            unique.delete(s[start]);
            start++
        }
    }
        return maxlength
 };

 let res = lengthOfLongestSubstring("abcabcbb")
 console.log(res)