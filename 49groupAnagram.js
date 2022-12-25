function groupAnagram(str) {
  const sortedStr = str.map((word) => word.split("").sort().join(""));
  console.log(sortedStr);

  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash[sortedStr[i]]) {
      hash[sortedStr[i]] = [str[i]];
    } else {
      hash[sortedStr[i]].push(str[i]);
    }
  }
  return Object.values(hash);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
