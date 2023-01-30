function mergedTwoSortedList(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val > l2.val) {
    let temp = l1;
    l1 = l2;
    l2 = temp;
  }

  let res = l1;
  while (l1 != null && l2 != null) {
    let tmp = null;
    while (l1 != null && l1.val <= l2.val) {
      tmp = l1;
      l1 = l1.next;
    }
    tmp.next = l2;

    let temp = l1;
    l1 = l2;
    l2 = temp;
  }
  return res;
}

console.log(mergedTwoSortedList([3, 5, 7, 9], [4, 6, 8, 10]));
