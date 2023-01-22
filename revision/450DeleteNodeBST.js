function deleteNodeBST(root, key) {
  if (root == null) return root;

  if (root.val == key) return helper(root);

  let dummy = root;
  while (root != null) {
    if (root.val > key) {
      if (root.left != null && root.left.val == key) {
        root.left = helper(root.left);
        break;
      } else {
        root = root.left;
      }
    } else if (root.val < key) {
      if (root.right != null && root.right.val == key) {
        root.right = helper(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }
  return dummy;
}

function helper(root) {
  if (root.left == null) {
    return root.right;
  } else if (root.right == null) {
    return root.left;
  }

  let rightchild = root.right;
  let lastchild = findlastchild(root.left);
  lastchild.right = rightchild;
  return root.left;
}

function findlastchild(root) {
  if (root.right == null) {
    return root;
  }

  return findlastchild(root.right);
}
