function countVowelConsonant(str) {
  let ccount = 0;
  let vcount = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      vcount++;
    } else if (
      (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) ||
      (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
    ) {
      ccount++;
    }
  }
  return {
    vowels: vcount,
    consonant: ccount,
  };
}

console.log(countVowelConsonant("hello world"));
