class Node {
  constructor(value) {
    this.value = value;
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
      this.length++;
    } else {
      let current = this.head;
      let prev;
      while (current) {
        prev = current;

        current = current.next;
      }
      current = newNode;
      current.prev = prev;
      prev.next = current;
      this.tail = prev.next;
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
      let prev;
      let x = 0;
      while (true) {
        if (x === this.length - 2) {
          prev = current;
          break;
        }

        current = current.next;
        x++;
      }
      prev.next = null;
      this.tail = prev;
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
      this.head.prev = null;
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
      this.head.prev = newNode;
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
          return current.value;
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
      nextNode.prev = prevNode;
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
      let prev;
      let next;

      while (index) {
        if (index === 2) {
          prev = current;
        } else if (index === 1) {
          next = current;
        }
        current = current.next;

        index--;
      }
      prev.next = newNode;
      next.prev = newNode;
      newNode.prev = prev;
      newNode.next = next;
      this.length++;
    }
    return this;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      prev = current;
      current = current.prev;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}
const doubleNewLinkedList = new DoublyLinkedList();
doubleNewLinkedList.push(1);
doubleNewLinkedList.push(2);
console.log(doubleNewLinkedList.push(3));
console.log(doubleNewLinkedList.push(4));
console.log(doubleNewLinkedList.push(5));
console.log(doubleNewLinkedList.reverse());
