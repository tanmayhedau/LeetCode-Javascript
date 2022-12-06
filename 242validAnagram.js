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
