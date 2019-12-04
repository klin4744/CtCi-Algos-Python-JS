//  Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}
// find the depth of each node via DFS,

function getDepth(node, target) {
   let depth = 0;
   const queue = [];
   queue.push(node);
   while (queue.length) {
      let removed = queue.shift();
      if (removed === target) return depth;
      if (!queue.length) {
         depth++;
      }
      if (queue.left) {
         queue.push(removed.left);
      }
      if (queue.right) {
         queue.push(removed.right);
      }
   }
   return depth;
}

function firstCommonAncestory(root, node1, node2) {}

const validTree = new TreeNode(10);
validTree.left = new TreeNode(5);
validTree.right = new TreeNode(12);
validTree.right.left = new TreeNode(11);

console.log(getDepth(validTree, validTree.right.left));
