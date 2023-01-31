var uniqueElement = (arr) => {
  let map = {};
  for (let i of arr) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i] += 1;
    }
  }

  let res = [];
  for (let val in map) {
    if (map[val] === 1) {
      res.push(val);
    }
  }
  return res;
};

console.log(uniqueElement([1, 1, 2, 22, 3, 5, 11, 2]));


