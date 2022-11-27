function isPoweroftwo(n) {
  if (n < 1) return false;
  return (n & (n - 1)) == 0;

  // if(n<1) return false;
  // while(n>1){
  //     if(n%2 != 0) return false;
  //     n =n/2;
  // }
  // return true;
}

console.log(isPoweroftwo(3));
console.log(isPoweroftwo(8));
console.log(isPoweroftwo(1));
