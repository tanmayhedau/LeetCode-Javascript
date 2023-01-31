let a ="hello";
let b ="world";

a = a.concat(b)
// console.log(a)
b= a.slice(0,b.length)
// console.log(b)
a= a.slice(b.length)
console.log(a, "a")
console.log(b,"b")