// Implement an algorithm to find the kth last element of a singly linked list

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function removeKFromEnd(head, k) {
   let node1 = head;
   let node2 = head;
   while (k > 0) {
      node2 = node2.next;
      k--;
   }
   while (node2.next) {
      node1 = node1.next;
      node2 = node2.next;
   }
   node1.next = node1.next.next;
   return head;
}
//        *     *
// 1, 2, 3 , 4 ,5   2
const L1 = new LinkedListNode('a');
const L2 = new LinkedListNode('b');
const L3 = new LinkedListNode('a');
const L4 = new LinkedListNode('b');
const L5 = new LinkedListNode('c');
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

console.log(removeKFromEnd(L1, 1));
