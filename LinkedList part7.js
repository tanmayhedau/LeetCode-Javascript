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

  //O(1)
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

  //O(n)
  append(value) {
    const newnode = new Node(value);
    if (this.isEmpty()) {
      this.head = newnode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newnode;
    }
    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removefrom(index){
    if(index < 0 || index >= this.size){
        return null;
    }
    let removeNode;
    if(index === 0){
        removeNode = this.head;
        this.head = this.head.next;
    }else{
        let prev = this.head;
        for(let i=0; i<index-1; i++){
            prev =prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next
    }
    this.size--;
    return removeNode.value;
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
list.append(30);

list.append(40);
list.append(60);
list.insert(0, 10);
list.insert(2, 30);
list.removefrom(2);
list.removefrom(4);

list.print();
