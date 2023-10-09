class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
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
    return this.tail.val;
  }
  isEmpty() {
    return !this.top;
  }
  getSize() {
    return this.size;
  }
}
const newStack = new Stack();
newStack.push(1);
newStack.push(2);
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.isEmpty());
console.log(newStack.getSize());
