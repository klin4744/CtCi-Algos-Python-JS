// Write code to remove duplicates from an unsorted linked list
class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function removeDuplicates(head) {
   const memo = new Map();
   let currentNode = head;
   while (currentNode) {
      if (!memo.has(currentNode.val)) {
         memo.set(currentNode.val, true);
      }
      if (currentNode.next) {
         while (currentNode.next && memo.has(currentNode.next.val)) {
            temp = currentNode.next;
            currentNode.next = currentNode.next.next;
            temp.next = null;
         }
      }
      currentNode = currentNode.next;
   }
   return head;
}

const L1 = new LinkedListNode('a');
const L2 = new LinkedListNode('b');
const L3 = new LinkedListNode('a');
const L4 = new LinkedListNode('b');
const L5 = new LinkedListNode('c');
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

console.log(removeDuplicates(L1));
