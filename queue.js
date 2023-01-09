class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(ele) {
    return this.items.push(ele);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.items[0];
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(14);
queue.enqueue(13);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.size());
