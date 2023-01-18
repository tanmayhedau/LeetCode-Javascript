function checkPalindrome(s) {
  if (s.length <= 1) return true;
  if (s[0] != s[s.length - 1]) return false;
  return checkPalindrome(s.slice(1, -1));
}

console.log(checkPalindrome("rotor"));
