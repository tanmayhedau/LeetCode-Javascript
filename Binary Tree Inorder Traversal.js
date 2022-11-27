// function inOrderTravers(root){
//     let res=[]

//     const traverse = (node) => {
//         if(!node) return;
//         traverse(node.left)
//         res.push(node.val)
//         traverse(node.right)
//     }
//     traverse(root)
//     return res
// }

var inorderTraversal = function(root) {
    const result = [];
     
     traverse(root);
     function traverse(node) {
         if(!node) return;
         
         traverse(node.left);
         result.push(node.val);
         traverse(node.right);
         return result;
     }
 };

let res1 = inorderTraversal([1,null,2,3])
console.log(res1)