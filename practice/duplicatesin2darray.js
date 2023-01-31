const arr = [
    [1,2,3,4,5],
    [3,4,6,7,8,2],
    [7,2,4,9,11,15],
    [10,12,3,7,11]
 ];
 const removeDuplicates = arr => {
    let map = {};
    let res = [];
    res = arr.map(el => {
       return el.filter(val => {
          if(map[val]){
             return false;
          };
          map[val] = 1;
          return true;
       });
    });
    return res;
 };
 console.log(removeDuplicates(arr));