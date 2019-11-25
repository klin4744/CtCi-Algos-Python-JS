// Given two singly linked lists, determine if the two lists intersect. Return the intersecting node.

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function findIntersection(list1, list2) {
   if (!list1 || !list2) return null;
   let p1 = list1;
   let length1 = 1;
   let p2 = list2;
   let length2 = 1;
   while (p1.next) {
      p1 = p1.next;
      length1++;
   }
   while (p2.next) {
      p2 = p2.next;
      length2++;
   }
   if (p1 !== p2) return null;
   p1 = list1;
   p2 = list2;
   for (let i = 0; i < Math.abs(length1 - length2); i++) {
      if (length2 < length1) {
         p2 = p2.next;
      } else {
         p1 = p1.next;
      }
   }
   return length2 < length1 ? p2 : p1;
}
const L1 = new LinkedListNode(3);
const L2 = new LinkedListNode(1);
const L3 = new LinkedListNode(5);
const L4 = new LinkedListNode(9);
const L5 = new LinkedListNode(7);
const L6 = new LinkedListNode(2);
const L7 = new LinkedListNode(1);
const L8 = new LinkedListNode(4);
const L9 = new LinkedListNode(6);
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L5;

L5.next = L6;
L6.next = L7;

L8.next = L9;
L9.next = L5;

console.log(findIntersection(L1, L8));
