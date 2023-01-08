const LinkedList = require("./LinkedListwithTail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(51);
stack.push(21);
stack.push(31);
stack.push(11);
stack.print();
console.log(stack.getSize());

console.log(stack.pop());
stack.print();
console.log(stack.peek());

