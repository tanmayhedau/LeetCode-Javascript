function sortedArrayToBST(nums, left =0, right= nums.length -1) {
    let mid = Math.floor((left+right)/2);
    if(left > right) return null;

    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums, left, mid-1)
    root.right = sortedArrayToBST(nums, mid+1, right)
    return root

}

let res = sortedArrayToBST([-10,-3,0,5,9])
console.log(res)