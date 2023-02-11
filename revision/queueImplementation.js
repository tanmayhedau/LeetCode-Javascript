class Queue {
  constructor() {
    this.items = [];
  }

  add(ele) {
    return this.items.push(ele);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.shift();
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
let queue = new Queue();
console.log(queue.isEmpty());
queue.add(1);
queue.add(2);
queue.add(4);
queue.add(6);

console.log(queue.items);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.clear());
