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
      this.head = val;
      this.tail = val;
      this.length++;
    } else {
      let current = this.head;
      this.head = newNode;
      this.head.next = current;
      this.length++;
    }
    return this;
  }

  get(val) {
    if (!this.head) {
      return -1;
    } else {
      let curent = this.head;
      for (let x = 0; x < this.length; x++) {
        if (curent.value === val) {
          return x;
        }
        curent = curent.next;
      }
      return -1;
    }
  }

  getValue(index) {
    let current = this.head;
    if (index >= this.length || index < 0) {
      return -1;
    } else {
      for (let x = 0; x <= index; x++) {
        if (x === index) {
          return current;
        }
        current = current.next;
      }
    }
  }

  remove(val) {
    let i = this.get(val);
    if (!this.head) {
    } else if (i === -1) {
      console.log("Invalide val");
    } else if (i === this.length - 1) {
      this.pop();
    } else if (i === 0) {
      this.shift();
    } else {
      let current = this.head;
      let prevIndex = i - 1;
      let nextIndex = i + 1;
      let prevNode;
      let nextNode;
      for (let x = 0; x <= nextIndex; x++) {
        if (x === prevIndex) {
          prevNode = current;
        }
        if (x === nextIndex) {
          nextNode = current;
        }
        current = current.next;
      }

      prevNode.next = nextNode;
      this.length--;
    }

    return this;
  }

  insert(value, index) {
    if (index > this.length) {
      console.log("invalide index");
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let current = this.head;
      const newNode = new Node(value);
      let prevIndex = this.get(index - 1);
      let nextIndex = this.get(index);
      let prevNode;
      let nextNode;
      for (let x = 0; x <= nextIndex; x++) {
        if (x === prevIndex) {
          prevNode = current;
        }
        if (x === nextIndex) {
          nextNode = current;
        }
        current = current.next;
      }
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
}
const newLinkedList = new LinkedList();
newLinkedList.push(1);
newLinkedList.push(2);
console.log(newLinkedList.push(3));
console.log(newLinkedList.push(4));
console.log(newLinkedList.push(5));
console.log(newLinkedList.push(5));
console.log(newLinkedList.reverse());
