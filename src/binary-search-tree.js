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

  deleteNode(node, data) {
    if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }


      const minNodeInRightSubtree = this.minNode(node.right);
      node.data = minNodeInRightSubtree.data;

      node.right = this.deleteNode(node.right, minNodeInRightSubtree.data);
      return node;
    }

    if (data < node.data) {
      if (node.left === null) {
        return node;
      }

      node.left = this.deleteNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      if (node.right === null) {
        return node;
      }

      node.right = this.deleteNode(node.right, data);
      return node;
    }
  }

  remove(data) {
    if (this.top === null) {
      return;
    }
    this.top = this.deleteNode(this.top, data);
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

  minNode(node) {
    if (node === null) {
      return null;
    }
    let temp = node;
    while (temp.left !== null) {
      temp = temp.left;
    }
    return temp;
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