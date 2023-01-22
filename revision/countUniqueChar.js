function countUniqueChar(s) {
  let mp = {};

  for (let val of s) {
    mp[val] = (mp[val] || 0) + 1;
  }

  console.log(mp);

  let count = 0;
  for (let val in mp) {
    if (mp[val] === 1) {
      count++;
    }
  }
  return count;
}
console.log(countUniqueChar("hello"));
