class Queue {
  constructor() {
    this.items = [];
  }

  add(ele) {
    return this.items.push(ele);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  clear() {
    return (this.items = []);
  }
}
let stack = new Queue();
console.log(stack.isEmpty());
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(6);

console.log(stack.items);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.clear());
