const duplicateElements = (arr) => {
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (mp.has(x)) {
      mp.set(x, mp.get(x) + 1);
    } else {
      mp.set(x, 1);
    }
  }

  let ans = [];
  mp.forEach((val, key) => {
    if (val > 1) ans.push(key);
  });

  if (ans.length == 0) {
    ans.push(-1);
  }

  ans.sort((a,b)=>a-b);
  return ans;
};

console.log(duplicateElements([70,10,50,20,30,20,40,50,70,10]))