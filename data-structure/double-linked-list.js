class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;
    let currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = currentHead.next;
    this.head.prev = null;
    currentHead.next = null;
    this.length--;
    return currentHead;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return newHead;
  }

  get(index) {
    if (!this.head) return undefined;
    if (index < 0 || index > this.length) return null;
    let currentNode = null;
    if (index <= this.length / 2) {
      let counter = 0;
      currentNode = this.head;
      while (counter != index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      currentNode = this.tail;
      while (counter != index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }

    return currentNode;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.push(1);

list.push(2);

console.log(list.length);
console.log(list.get(8));
