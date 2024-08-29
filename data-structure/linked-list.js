class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    
  }
}

let list = new SinglyLinkedList();
list.push("man");
console.log(list.push("hi man"));
console.log(list.push("hi y"));

// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("Are");
// first.next.next.next = new Node("You");
