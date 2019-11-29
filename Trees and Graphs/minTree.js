// Minimal tree - Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height
class Tree {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

function minTree(arr) {
   if (!arr.length) return null;
   if (arr.length === 1) return new Tree(arr[0]);
   const mid = Math.floor(arr.length / 2);
   const node = new Tree(arr[mid]);
   node.left = minTree(arr.slice(0, mid));
   node.right = minTree(arr.slice(mid + 1));
   return node;
}

minTree([1, 2, 3, 4, 5]);
