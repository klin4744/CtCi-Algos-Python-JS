// Successor - write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
      this.parent = null;
   }
}

// Easy version => parent exists

function inorderSuccessor(node) {
   if (!node) return null;
   if (node.right && node.parent && node.parent.val > node.val) {
      return node.right.val < node.parent.val
         ? node.right.val
         : node.parent.val;
   }
   if ((node.right && !node.parent) || node.parent.val < node.val) {
      return node.right;
   }
   if ((!node.right && !node.parent) || node.parent.val < node.val) return null;
}

// Harder version => just have regular node and root node
function inorderSuccessor(root, target) {
   let targetIdx = Infinity;
   let idx = 0;
   function DFSinOrder(node, arr = []) {
      if (node.left) {
         DFSinOrder(node.left, arr);
      }
      if (node === target) {
         targetIdx = idx;
      }
      idx++;
      arr.push(node);
      if (node.right) {
         DFSinOrder(node.right, arr);
      }
      return arr;
   }
   const arr = DFSinOrder(root);
   if (targetIdx + 1 >= arr.length) return null;
   return arr[targetIdx + 1];
}
