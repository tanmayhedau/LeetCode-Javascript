// add node at front of the linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newnode = new Node(value);
    if (this.isEmpty()) {
      this.head = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }

    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listvalues = "";
      while (curr) {
        listvalues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listvalues);
    }
  }
}

let list = new LinkedList();
list.print();
list.prepend(10);
list.print();
list.prepend(30);
list.prepend(40);
list.print();
list.prepend(60);
list.print();
