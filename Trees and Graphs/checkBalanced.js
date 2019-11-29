// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of two subtrees of any node never differ by more than one;

class Tree {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

function getMaxHeight(tree, depth = 0) {
   if (!tree.left && !tree.right) return depth;
   let left = depth,
      right = depth;
   if (tree.left) {
      left = getMaxHeight(tree.left, depth + 1);
   }
   if (tree.right) {
      right = getMaxHeight(tree.right, depth + 1);
   }
   return Math.max(left, right);
}

function getMinHeight(tree, depth = 0) {
   if (!tree.left && !tree.right) return depth;
   let left = depth,
      right = depth;
   if (tree.left) {
      left = getMinHeight(tree.left, depth + 1);
   }
   if (tree.right) {
      right = getMinHeight(tree.right, depth + 1);
   }
   return Math.min(left, right);
}

function isBalanced(tree) {
   return getMaxHeight(tree) - getMinHeight(tree) <= 1;
}

const node1 = new Tree(5);
const node2 = new Tree(4);
const node3 = new Tree(3);
const node4 = new Tree(2);
const node5 = new Tree(1);
const node6 = new Tree(10);
const node7 = new Tree(8);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node6.left = node7;
console.log(isBalanced(node1));
