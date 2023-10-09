class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
    return this.first;
  }
  dequeue() {
    // shifth
    if (!this.first) {
      return;
    } else if (this.size === 1) {
      let current = this.first;
      this.first = null;
      this.last = null;
      this.size = 0;
      return current;
    } else {
      let current = this.first;
      this.first = current.next;
      current.next = null;
      this.size--;
      return current;
    }
  }
  front() {
    return this.first.value;
  }

  isEmpty() {
    return !this.first;
  }
  sizeMethod() {
    return this.size;
  }
  print() {
    let current = this.first;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Output: 1 2 3

console.log("Front element: " + queue.front()); // Output: Front element:

queue.dequeue();
queue.print(); // Output: 2 3
console.log(queue.sizeMethod()); // Output: Queue size: 2
