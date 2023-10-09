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
const isValidParentheses = (parentheses) => {
  const obj = { "}": "{", "]": "[", ")": "(" };
  const parenthesesArr = parentheses.split("");
  for (let key of parenthesesArr) {
    if (key === "{" || key === "(" || key === "[") {
      stack.push(key);
    } else if (key === "}" || key === ")" || key === "]") {
      if (stack.top() === obj[key]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.isEmpty();
};
const res = isValidParentheses(
  "((((((()((((()))))((((((())))))))))))((((()))))((((())))))"
);
console.log(res);
