function bstFromPreorder(preorder) {
  let i = 0;
  function build(max) {
    if (preorder.length === 0 || preorder[i] >= max) return null;

    let root = new TreeNode(preorder[i++]);
    root.left = build(root.val);
    root.right = build(max);
    return root;
  }
  return build(Number.MAX_SAFE_INTEGER);
}

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
