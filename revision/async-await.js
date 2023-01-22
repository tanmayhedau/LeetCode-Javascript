/* 

https://www.programiz.com/javascript/async-await

async keyword is used with function to represents that function is a asynchronus functions. The async function returns promise.
await keyword is used inside the async functions to wait for aynchronous operations.


*/

let count = false;
let countValue = new Promise((resolve, reject) => {
  if (count) {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  } else {
    reject("error");
  }
});

const asyncFunc = async () => {
  try {
    let res = await countValue;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();
