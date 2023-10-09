class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    if (!this.root) {
      return false;
    }
    while (true) {
      if (!current) {
        return false;
      }
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

const newBinarySearchTree = new BinarySearchTree();
console.log(newBinarySearchTree.insert(24));
console.log(newBinarySearchTree.insert(4));
console.log(newBinarySearchTree.insert(14));
console.log(newBinarySearchTree.insert(42));
console.log(newBinarySearchTree.insert(122));
console.log(newBinarySearchTree.insert(25));
console.log(newBinarySearchTree.insert(26));
console.log(newBinarySearchTree.find(121));
