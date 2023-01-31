// function isSymmetric (root){
//     let res =true
//     function helper(node1, node2){
//         if(!node1 && !node2){
//             return
//         }
//         if(!node1 || !node2 || node1.val !== node2.val){
//             res = false
//             return
//         }
//         helper(node1.left, node2.right)
//         helper(node1.right, node2.left)
//     }
//     helper(root, root)
//     return res
// }

var isSymmetric = function (root) {
  const innerIsSymmetric = (node1, node2) => {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;

    return (
      node1.val === node2.val &&
      innerIsSymmetric(node1.left, node2.right) &&
      innerIsSymmetric(node1.right, node2.left)
    );
  };

  return innerIsSymmetric(root, root);
};

let res1 = isSymmetric([1, 2, 2, null, 3, null, 3]);
console.log(res1);
