const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.top = null;
  }

  root() {
    return this.top;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;
      return;
    }
    let temp = this.top
    while (true) {
      if (newNode.data < temp.data) {
        if (temp.left === null) {
          temp.left = newNode;
          return;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return;
        }
        temp = temp.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.top === null) {
      return null;
    }
    let temp = this.top;
    while (temp.data !== data) {
      if (temp.data > data) {
        if (temp.left === null) {
          return null;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          return null;
        } else {
          temp = temp.right;
        }
      }
    }
    return temp;
  }

  remove(data) {
    if (this.top === null) {
      return;
    }
    let temp = this.top;
    if (temp.data === data) {
      if (temp.left !== null && temp.right === null) {
        this.top = this.top.left;
        return;
      }
      if (temp.right !== null && temp.left === null) {
        this.top = this.top.right;
        return;
      }
       if (temp.right === null && temp.left === null) {
        this.top = new Node;
        return;
      }
      let newNode = this.top.right;
      while (newNode.left !== null) {
        newNode = newNode.left;
      }
      newNode.left = temp.left;
      newNode.right = temp.right;
    }
    while (temp.data !== data) {
      if (temp.data > data) {
        if (temp.left === null) {
          return;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          return;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  min() {
    if (this.top === null) {
      return null;
    }
    let temp = this.top;
    while (temp.left !== null) {
      temp = temp.left;
    }
    return temp.data ?? null;
  }

  max() {
    if (this.top === null) {
      return null;
    }
    let temp = this.top;
    while (temp.right !== null) {
      temp = temp.right;
    }
    return temp.data ?? null;
  }
}

module.exports = {
  BinarySearchTree
};