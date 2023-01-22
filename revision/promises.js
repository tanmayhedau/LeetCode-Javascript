/*  

promises in javascript is used to handle async operations, it is used to find out async operations is completed or not.
3 states=> pending, fulfilled, rejected

a promise starts in pending state that means promise is not complete.
if the operation is successful the process ends in fulfilled state.
and, if the error occurs, the process ends in a rejected state.

to create a promise object, we use Promise() constructor
the Promise() contructor takes a function as an agrument. the function also accepts two function resolve() and reject()

if the promise returns successfully, resolve() function is called and if error occurs, the reject() function is called.

promises are useful when you have to handle more than one async tasks, one after the another, for that we use promise chaining.

then() is used with callback when promise is successfully resolved.

catch() is used with callback when promise is rejected or error occurs.

finally() is used with callback when promise is either resolved or rejected. 


util.promisify() => method is used to convert error first callback function into promise.


*/

let count = true;
let countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve("count is there");
  } else {
    reject("no count is there");
  }
});

countValue
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

// console.log(countValue);
