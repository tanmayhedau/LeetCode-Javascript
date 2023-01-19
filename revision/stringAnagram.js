function isAnagram(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  let mp = {};
  for (let val of s1) {
    mp[val] = (mp[val] || 0) + 1;
  }

  for (let val of s2) {
    if (!mp[val]) {
      return false;
    }
    mp[val] = -1;
  }
  return true;
} //tc=O(n)   sc=O(n)

let res = isAnagram("hello", "llheo");
console.log(res);
