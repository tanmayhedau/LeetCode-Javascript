// function deepCopyArray(arr) {
//     let copy = [];
//     for (let i = 0; i < arr.length; i++) {
//       copy.push(arr[i]);
//     }
//     return copy;
//   }

//   // Test cases

//   let originalArray = [1, 2, 3];
//   let copiedArray = deepCopyArray(originalArray);

//   console.log(originalArray === copiedArray); // outputs false, since the arrays are different objects
//   console.log(originalArray[0] === copiedArray[0]); // outputs true, since the elements are the same
//   console.log(originalArray[1] === copiedArray[1]); // outputs true, since the elements are the same
//   console.log(originalArray[2] === copiedArray[2]); // outputs true, since the elements are the same

// function deepCopy(obj) {
//     let copy = Array.isArray(obj) ? [] : {};
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         if (typeof obj[key] === "object") {
//           copy[key] = deepCopy(obj[key]);
//         } else {
//           copy[key] = obj[key];
//         }
//       }
//     }
//     return copy;
//   }

//   // Test cases

//   let originalObject = {
//     a: 1,
//     b: {
//       c: 2,
//       d: 3
//     }
//   };
//   let copiedObject = deepCopy(originalObject);

//   console.log(originalObject === copiedObject); // outputs false, since the objects are different
//   console.log(originalObject.a === copiedObject.a); // outputs true, since the properties are the same
//   console.log(originalObject.b === copiedObject.b); // outputs false, since the objects are different
//   console.log(originalObject.b.c === copiedObject.b.c); // outputs true, since the properties are the same
//   console.log(originalObject.b.d === copiedObject.b.d); // outputs true, since the properties are the same

// let obj = {
//   name:'peter'
// }
// let user = obj;
// user.name = 'bruce'

// let obj = {
//   name: "peter",
// };

// let user = Object.assign({}, obj);
// user.name = "bruce";

// let obj = {
//   name: "peter",
// };

// let user = { ...obj };
// user.name = "bruce";

// let obj = {
//   name: "peter",
//   address: {
//     state: "MH",
//     city: "NGP",
//   },
//   getdata: function () {
//     return "hello world";
//   },
//   joiningDate: new Date(),
// };

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "P town";

// const _ = require("lodash");

// let obj = {
//   name: "peter",
//   address: {
//     state: "MH",
//     city: "NGP",
//   },
//   getdata: function () {
//     return "hello world";
//   },
//   joiningDate: new Date
// };

// let user = _.cloneDeep(obj);
// user.address.city = "P town";

// console.log(obj);
// console.log(user);


// let arr = [{a:3},{b:2},{c:1}]
// let copyarr = ['hi']

// for(let i=0; i<arr.length; i++){
//   copyarr.push({...arr[i]})
// }
// console.log(arr);
// console.log(copyarr);