// class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// let head = new LinkedListNode(1);
// head.next = new LinkedListNode(2);
// head.next.next = new LinkedListNode(1);
// // head.next.next.next = new LinkedListNode(1);
// console.log(head)

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let reverse = (head) => {
  let curr = head;
  let prev = null;
  let next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let pointer = head;
  let len = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    len++;
  }

  let mid = reverse(slow);
  while (len) {
    len--;
    if (mid.val != pointer.val) {
      return false;
    }
    mid = mid.next;
    pointer = pointer.next;
  }
  return true;
};

console.log(isPalindrome([1, 2, 4]));


