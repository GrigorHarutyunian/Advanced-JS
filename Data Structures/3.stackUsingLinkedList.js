class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.top = null;
    this.tail = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  pop() {
    let current = this.top;
    let lastElem = this.tail;
    if (this.size <= 1) {
      this.top = null;
      this.tail = null;
      this.size = 0;
      return lastElem?.val ? lastElem.val : "Stack is Empty";
    }
    while (current.next) {
      this.tail = current;
      current = current.next;
    }
    this.tail.next = null;
    this.size--;
    return lastElem.val;
  }
  peek() {
    return this.tail ? this.tail.val : "0 elements";
  }
  isEmpty() {
    return !this.top;
  }
  getSize() {
    return this.size;
  }
}

class Stack {
  memory = new LinkedList();
  push(val) {
    return this.memory.push(val);
  }
  pop() {
    return this.memory.pop();
  }
  peek() {
    return this.memory.peek();
  }
  isEmpty() {
    return this.memory.isEmpty();
  }
  getSize() {
    return this.memory.getSize();
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
