// You are implementing a binary search tree class from scratch which, in addition to insert,find, and delete, has a method getRandomNode() which returns a random node from the tree. All nodes should be equally likely to be chose. Design and implement an algorithmn for getRandomNode, and explain how you would implement the rest of the methods

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}

class BST {
   constructor() {
      this.head = null;
   }
   getRandom() {
      const queue = [];
      const nodes = [];
      queue.push(this.head);
      while (queue.length) {
         const node = queue.shift();
         nodes.push(node);
         if (node.left) {
            queue.push(node.left);
         }
         if (node.right) {
            queue.push(node.right);
         }
      }
      const rand = Math.floor(Math.rand() * nodes.length);
      return nodes[rand];
   }
   insert(val) {
      const newNode = new TreeNode(val);
      if (!this.head) return (this.head = newNode);
      let currentNode = this.head;
      while (currentNode.left && currentNode.right) {
         if (currentNode.val < val) {
            currentNode = currentNode.right;
         } else {
            currentNode = currentNode.left;
         }
      }

      if (currentNode.val > val && !currentNode.left) {
         currentNode.left = newNode;
      } else {
         currentNode.right = newNode;
      }

      return newNode;
   }
   find(val) {
      if (!this.head) return null;
      let currentNode = this.head;
      while (currentNode) {
         if (currentNode.val === val) break;
         if (currentNode.val < val) {
            currentNode = currentNode.right;
         } else {
            currentNode = currentNode.left;
         }
      }
      return currentNode;
   }
}
