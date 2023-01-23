function longestUniqueSubstring(s) {
  if (s.length === 0) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let maxlen = 0;

  let unique = new Set();
  while (end < s.length) {
    if (!unique.has(s[end])) {
      unique.add(s[end]);
      end++;
      maxlen = Math.max(maxlen, unique.size);
    } else {
      unique.delete(s[start]);
      start++;
    }
  }
  return maxlen;
}

console.log(longestUniqueSubstring("absabcabc"));
