// Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list , given only access to that node

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function deleteInPlace(nodeToDelete) {
   nodeToDelete.val = nodeToDelete.next.val;
   nodeToDelete.next = nodeToDelete.next.next;
}
//        *     *
// 1, 2, 3 , 4 ,5   2
const L1 = new LinkedListNode('a');
const L2 = new LinkedListNode('b');
const L3 = new LinkedListNode('c');
const L4 = new LinkedListNode('b');
const L5 = new LinkedListNode('c');
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

console.log(deleteInPlace(L3));
console.log(L1);
