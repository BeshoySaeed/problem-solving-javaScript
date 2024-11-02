// we can implement stack with normal array
// but care with shift and unshift it's un efferent cuz it's required to re index the all elements
// so if we will use array it's will be better if we use push and pop
//
// in this file we will implement stack with linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return undefined;
    const newNode = this.first;
    this.first = this.first.next;
    this.size--;
    return newNode;
  }
}

// push and pop

// if first null so make first and last = curr node
// if there is a value so get last.next equal it to curr node

// if there is no first return undefined
// else remove first
