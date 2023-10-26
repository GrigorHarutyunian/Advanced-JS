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

  insert(value, root = this.root) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    if (root.value > value) {
      if (root.left === null) {
        root.left = newNode;
        return this;
      } else {
        this.insert(value, root.left);
      }
    } else if (this.root.value < value) {
      if (root.right === null) {
        root.right = newNode;
        return this;
      } else {
        this.insert(value, root.right);
      }
    }
    return this;
  }

  find(value, root = this.root) {
    if (!root) {
      return false;
    }
    if (value === root.value) {
      return true;
    }

    if (root.value > value) {
      return this.find(value, root.left);
    }
    return this.find(value, root.right);
  }
}

const newBinarySearchTree = new BinarySearchTree();
console.log(newBinarySearchTree.insert(24));
console.log(newBinarySearchTree.insert(4));
console.log(newBinarySearchTree.insert(224));
console.log(newBinarySearchTree.insert(228));
console.log(newBinarySearchTree.insert(222));
console.log(newBinarySearchTree.insert(2));
console.log(newBinarySearchTree.find(228));
console.log(newBinarySearchTree.find(2));
console.log(newBinarySearchTree.find(229));
console.log(newBinarySearchTree.find(228));
