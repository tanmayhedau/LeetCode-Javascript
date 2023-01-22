function LCA(root, p, q) {
  if (root == null || root == p || root == q) {
    return root;
  }

  let left = LCA(root.left, p, q);
  let right = LCA(root.right, p, q);

  if (left == null) {
    return right;
  } else if (right == null) {
    return left;
  } else return root;
}
