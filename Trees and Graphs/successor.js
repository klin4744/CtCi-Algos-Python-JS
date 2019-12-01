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
function inOrderSuccessor(root, node) {
   // do dfs to do an inorder storage
   const arr = DFSinOrder(root, node);
   let targetIdx = 0;
   let left = 0;
   let right = arr.length - 1;
   while (left < right) {
      const middle = Math.floor((right - left) / 2) + left;
      if (arr[middle] === node) {
         targetIdx = middle;
         break;
      }
      if (arr[right] === node) {
         targetIdx = right;
         break;
      }
      if (arr[middle].val < node.val) {
         left = middle;
      } else {
         right = middle;
      }
   }
   if (targetIdx + 1 >= arr.length) return null;
   return arr[targetIdx + 1];
}
function DFSinOrder(node, target, arr = []) {
   if (node.left) {
      DFSinOrder(node.left, target, arr);
   }
   arr.push(node);
   if (node.right) {
      DFSinOrder(node.right, target, arr);
   }
   return arr;
}
