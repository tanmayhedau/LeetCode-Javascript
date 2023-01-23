function maximumOccurringString(s) {
  s = s.split("");
  let mp = {};
  for (let val of s) {
    mp[val] = (mp[val] || 0) + 1;
  }

  let char = s[0];
  let max = 1;

  for (let key in mp) {
    if (mp[key] > max) {
      max = mp[key];
      char = key;
    }
  }
  return char;
}

console.log(maximumOccurringString("hellmmmmo world"));
