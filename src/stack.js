const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = new Array;
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    let size = this.arr.length;
    let last;
    if (size > 0) {
      last = this.arr[size - 1];
      this.arr = this.arr.slice(0, size -1);
    }
    return last;
  }

  peek() {
    if (this.arr.length > 0) {
      return this.arr[this.arr.length - 1]
    }
  }
}

module.exports = {
  Stack
};
