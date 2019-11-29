// Validate BST - Implement a function to check if a binary tree is a binary search tree

class Tree {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}
function validateBST(tree, max = Infinity, min = -Infinity) {
   if (!tree) return true;
   if (tree.val >= max || tree.val < min) return false;
   const left = validateBST(tree.left, tree.val, min);
   const right = validateBST(tree.right, max, tree.val);
   return left && right;
}

const validTree = new Tree(10);
validTree.left = new Tree(5);
validTree.right = new Tree(12);
validTree.right.left = new Tree(11);

console.log(validateBST(validTree));
