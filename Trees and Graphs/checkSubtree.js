// T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1

// A tree is a subtree of T1 if there exists a node such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical
class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}

function checkSubtree(T1, T2) {
   let node = null;
   const queue = [];
   queue.push(T1);
   while (queue.length) {
      const shiftedNode = queue.shift();
      if (shiftedNode === T2) {
         node = shiftedNode;
         break;
      }
      if (shiftedNode.left) {
         queue.push(shiftedNode.left);
      }
      if (shiftedNode.right) {
         queue.push(shiftedNode.right);
      }
   }
   if (node === null) return false;
   return checkIdentical(node, T2);
}

function checkIdentical(node, T2) {
   if (!node && !T2) return true;
   if (node !== T2) return false;
   const left = checkIdentical(node.left, T2.left);
   const right = checkIdentical(node.right, T2.right);
   return left && right;
}

const validTree = new TreeNode(10);
validTree.left = new TreeNode(5);
validTree.right = new TreeNode(12);
validTree.right.left = new TreeNode(11);
validTree.right.left.right = new TreeNode(13);
validTree.right.left.left = new TreeNode(22);

console.log(checkSubtree(validTree, validTree.right));
console.log(checkSubtree(validTree, new TreeNode(0)));
