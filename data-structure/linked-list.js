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
    if (!this.head) return undefined; // List is empty

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (!prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prev;
      this.tail.next = null;
    }

    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  size() {
    return this.length;
  }
}

let list = new SinglyLinkedList();
list.push("man");
list.push("man2");
list.push("man4");
// list.pop();
// list.pop();
// list.pop();
list.shift();
console.log(list);
// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("Are");
// first.next.next.next = new Node("You");
