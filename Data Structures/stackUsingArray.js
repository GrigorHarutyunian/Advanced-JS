class Stack {
  #memory = [];
  push(val) {
    this.#memory = [...this.#memory, val];
  }
  pop() {
    return this.#memory.pop();
  }

  top() {
    return this.#memory.at(-1);
  }
  isEmpty() {
    return !this.#memory.length;
  }
  getSize() {
    return this.#memory.length;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.getSize());
