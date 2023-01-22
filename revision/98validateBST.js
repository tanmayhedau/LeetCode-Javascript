function isValidBST(root) {
  return checkBST(root, -Infinity, Infinity);
}

function checkBST(root, min, max) {
  if (root == null) {
    return root;
  }

  if (root.val >= max || root.val <= min) {
    return false;
  }

  return (
    checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max)
  );
}

