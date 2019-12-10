// BST Sequences: A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree

class TreeNode {
   constructor(val) {
      this.val = val;
      this.left = this.right = null;
   }
}

function BSTSequences(root) {
   const sequences = new Set();
   const originalSequence = DFS(root);
   sequences.add(originalSequence);
   const newSequences = rotateIndexes(sequences, originalSequence.length);
   return newSequences;
}
function DFS(root, arr = []) {
   if (!root) return [];
   arr.push(root.val);
   if (root.left) {
      DFS(root.left, arr);
   }
   if (root.right) {
      DFS(root.right, arr);
   }
   return arr;
}
// 1 to skip root
function rotateIndexes(sequences, maxLength, idx = 1) {
   if (idx + 1 >= maxLength) return sequences;
   const newSequences = new Set();
   const previousSequences = rotateIndexes(sequences, maxLength, idx + 2);
   previousSequences.forEach(sequence => {
      const newSequence = [...sequence];
      const temp = newSequence[idx];
      newSequence[idx] = newSequence[idx + 1];
      newSequence[idx + 1] = temp;
      if (!newSequences.has(newSequence)) {
         newSequences.add(newSequence);
      }
      if (!newSequences.has(sequence)) {
         newSequences.add(sequence);
      }
   });
   return newSequences;
}

const validTree = new TreeNode(10);
validTree.left = new TreeNode(5);
validTree.right = new TreeNode(12);
validTree.right.left = new TreeNode(11);
validTree.right.right = new TreeNode(41);

console.log(BSTSequences(validTree));
