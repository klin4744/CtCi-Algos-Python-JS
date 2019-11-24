// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function partition(node, x) {
   const leftPartition = [];
   const rightPartition = [];
   let currentNode = node;
   while (currentNode) {
      if (currentNode.val < x) {
         leftPartition.push(currentNode);
      } else {
         rightPartition.push(currentNode);
      }
      currentNode = currentNode.next;
   }
   let previous =
      leftPartition.length > 0 ? leftPartition.pop() : rightPartition.pop();
   while (leftPartition.length || rightPartition.length) {
      let popped;
      if (leftPartition.length) {
         popped = leftPartition.pop();
      } else {
         popped = rightPartition.pop();
      }
      previous.next = popped;
      previous = popped;
   }
   previous.next = null;
   return node;
}
const L1 = new LinkedListNode(3);
const L2 = new LinkedListNode(5);
const L3 = new LinkedListNode(8);
const L4 = new LinkedListNode(1);
const L5 = new LinkedListNode(2);
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

console.log(partition(L1, 5));
console.log(L5);
