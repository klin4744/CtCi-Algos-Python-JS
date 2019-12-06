//  Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
      this.parent = null;
   }
}
// find the depth of each node via DFS

// With parents

function getDepth(node, target, depth = 0) {
   if (!node) return -1;
   if (node === target) return depth;
   let left = -1,
      right = -1;
   if (node.left) {
      left = getDepth(node.left, target, depth + 1);
   }
   if (node.right) {
      right = getDepth(node.right, target, depth + 1);
   }
   if (left || right) return Math.max(left, right);
   return -1;
}

function firstCommonAncestor(root, node1, node2) {
   const depth1 = getDepth(root, node1);
   console.log(depth1);
   const depth2 = getDepth(root, node2);
   console.log(depth2);
   const difference = Math.abs(depth1 - depth2);
   if (depth1 < depth2) {
      for (let i = 0; i < difference; i++) {
         node2 = node2.parent;
      }
   } else {
      for (let i = 0; i < difference; i++) {
         node1 = node1.parent;
      }
   }
   while (node1 !== node2) {
      node1 = node1.parent;
      node2 = node2.parent;
   }
   return node1;
}

const validTree = new TreeNode(10);
validTree.left = new TreeNode(5);
validTree.right = new TreeNode(12);
validTree.right.left = new TreeNode(11);
validTree.left.parent = validTree.right.parent = validTree;
validTree.right.left.parent = validTree.right;

console.log(
   firstCommonAncestor(validTree, validTree.right, validTree.right.left),
);
