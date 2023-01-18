function reverseString(s) {
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
}  //tc O(n)  sc O(n)

// function reverseString(s) {
//   return s.split("").reverse().join("");
// }

let res = reverseString("hello");
console.log(res);
