class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let newnode = new Node(value);
        if(this.isEmpty()){
            this.head = newnode;
        }else{
            newnode.next = this.head;
            this.head = newnode;
        }

        this.size++
    }
}

let list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list);