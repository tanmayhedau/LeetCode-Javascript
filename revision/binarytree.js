class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let rootNode = new BinaryTreeNode(5);
// console.log(rootNode);
let node2 = new BinaryTreeNode(
  33,
  new BinaryTreeNode(44),
  new BinaryTreeNode(55)
);
// console.log(node2);

let node3 = new BinaryTreeNode(77);
rootNode.right = node2;

console.log(rootNode);
