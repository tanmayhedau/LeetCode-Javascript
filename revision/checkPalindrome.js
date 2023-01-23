// function checkPalindrome(s) {
//   if (s.length <= 1) return true;
//   if (s[0] != s[s.length - 1]) return false;
//   return checkPalindrome(s.slice(1, -1));
// }

function checkPalindrome(s) {
  let str = s.toLowerCase();
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
}

console.log(checkPalindrome("rotor"));
