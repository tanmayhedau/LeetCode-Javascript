const validAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let map = {};
  for (let val of s1) {
    map[val] = (map[val] || 0) + 1;
  }
  for (let val of s2) {
    if (!map[val]) return false;
    map[val] = -1;
  }
  return true;
};

console.warn(validAnagram("anagram","nagaram"))


var isAnagram = function(s, t) {
  let mapS = {}
  // let mapT = {}
  if(s.length != t.length) return false
  for(let i=0; i<s.length; i++){
    mapS[s[i]] = mapS[s[i]] ? mapS[s[i]] +1 : 1
       mapS[t[i]] = mapS[t[i]] ? mapS[t[i]] -1 : -1
  }
   for (let key in mapS) {
      //  console.log(key)
      if (mapS[key] !== 0) {
          return false
      }
  }

  return true
};
let s1 = 'anagram'
let s2 = "naagram"
console.log(isAnagram(s1,s2))