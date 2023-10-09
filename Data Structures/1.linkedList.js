class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
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
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.head) {
    } else if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
    } else {
      let current = this.head;
      for (let x = 0; x < this.length - 2; x++) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }
  shift() {
    if (!this.head) {
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let current = this.head;
      this.head = newNode;
      this.head.next = current;
      this.length++;
    }
    return this;
  }

  getIndex(val) {
    if (!this.head) {
      return -1;
    } else {
      let current = this.head;
      for (let x = 0; x < this.length; x++) {
        if (current.value === val) {
          return x;
        }
        current = current.next;
      }
      return -1;
    }
  }

  getNode(index) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (i === index) {
        return current;
      }
      i++;
      current = current.next;
    }
    return "invalide index";
  }

  remove(val) {
    let i = this.getIndex(val);
    if (!this.head) {
    } else if (i === -1) {
      console.log("Invalide val");
    } else if (i === this.length - 1) {
      this.pop();
    } else if (i === 0) {
      this.shift();
    } else {
      this.getNode(i - 1).next = this.getNode(i + 1);
      this.length--;
    }

    return this;
  }

  removeAt(index) {
    return this.remove(this.getNode(index).value);
  }

  insert(value, index) {
    if (index > this.length || index < 0) {
      console.log("invalide index");
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      const newNode = new Node(value);
      let prevNode = this.getNode(index - 1);
      let nextNode = this.getNode(index);
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    return this;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  getSize() {
    return this.length;
  }

  isEmpty() {
    return !this.length;
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new LinkedList();
list
  .push(1)
  .push(2)
  .push(3)
  .push(4)
  .push(5)
  .pop()
  .unshift(0)
  .shift()
  .remove(2)
  .removeAt(1)
  .insert(2, 1)
  .insert(3, 2)
  .printList();
console.log(list);
