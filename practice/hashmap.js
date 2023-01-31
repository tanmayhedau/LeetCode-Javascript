// function checkFrequency(A, B) {
//     let objA = {};
//     let objB = {};
  
//     for (let i = 0; i < A.length; i++) {
//       if (!objA[A[i]]) objA[A[i]] = 1;
//       else objA[A[i]] += 1;
//     }
  
//     for (let i = 0; i < B.length; i++) {
//       if (!objB[B[i]]) objB[B[i]] = 1;
//       else objB[B[i]] += 1;
//     }
  
//     let objAKeys = Object.keys(objA);
//     console.log(objB)
//     console.log(objA)
//     console.log(objAKeys)
//     for (let i=0;i<objAKeys.length;i++) {
//   //    let key = objAKeys[i]
//       if (objB[objAKeys[i] * objAKeys[i]] != objA[objAKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   //objB[9] = 2
//   // Program for Frequency Count of Square Number
//   let A = [3, 4, 3, 6,5];
//   let B = [16, 36, 9, 9,25];
//   let res = checkFrequency(A, B);
//   console.log(res);
  

// let profile = {
//     name: "alex"
// }
// Object.seal(profile)

// profile.age = 30
// profile.name = "alex"
// console.log(profile)

var a= [1,2,3]
a[10]=99
console.log(a[6])