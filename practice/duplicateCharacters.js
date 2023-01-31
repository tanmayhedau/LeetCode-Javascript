function findDuplicateChar(str) {
    let result = [];
    let map = new Map();
  
    for (let i = 0; i < str.length; i++) {
      !map.has(str[i])
        ? map.set(str[i], 1)
        : map.set(str[i], map.get(str[i]) + 1);
    }
  
    for (let ele of map) {
      if (ele[1] > 1) {
        //   console.log(`${ele[0]} : ${ele[1]}`);
        result.push(`${ele[0]} : ${ele[1]}`);
      }
    }
    return `Duplicate chars are: ${result.join(", ")}`;
  }
  
  let s = "amankumar";
  console.log(findDuplicateChar(s));