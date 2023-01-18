function reverseUsingRecursion(s) {
  if (s.length == 0) {
    return s;
  }

  return reverseUsingRecursion(s.slice(1)) + s[0];
}

console.log(reverseUsingRecursion("hello"));

