// Write code to addLists a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}
function listToInt(list, multiplier = 1) {
   if (!list) return 0;
   return list.val * multiplier + listToInt(list.next, multiplier * 10);
}

function addLists(list1, list2) {
   return listToInt(list1) + listToInt(list2);
}
const L1 = new LinkedListNode(7);
const L2 = new LinkedListNode(1);
const L3 = new LinkedListNode(6);
const L4 = new LinkedListNode(5);
const L5 = new LinkedListNode(9);
const L6 = new LinkedListNode(2);
const L7 = new LinkedListNode(1);
L1.next = L2;
L2.next = L3;
L4.next = L5;
L5.next = L6;
L6.next = L7;

console.log(addLists(L1, L4));
