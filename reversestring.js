function reverseString(s) {
  if (s.length <= 1) return s;
  return reverseString(s.slice(1)) + s[0];
}
let res = reverseString("hello world");
console.log(res);
