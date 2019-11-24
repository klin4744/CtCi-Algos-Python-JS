// You have two nunbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. Here we cannot convert our lists to ints!!

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function addLists(list1, list2) {
   let n1 = list1;
   let n2 = list2;
   let sum = 0;
   let carry = 0;
   let newList;
   let head;
   while (n1 || n2) {
      sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + carry;
      const newNode = new LinkedListNode(sum % 10);
      carry = Math.floor(sum / 10);
      if (!newList) {
         newList = newNode;
         head = newNode;
      } else {
         newList.next = newNode;
         newList = newList.next;
      }
      if (n1) {
         n1 = n1.next;
      }
      if (n2) {
         n2 = n2.next;
      }
   }
   return head;
}
const L1 = new LinkedListNode(7);
const L2 = new LinkedListNode(1);
const L3 = new LinkedListNode(6);
const L4 = new LinkedListNode(5);
const L5 = new LinkedListNode(9);
const L6 = new LinkedListNode(2);
const L7 = new LinkedListNode(3);
L1.next = L2;
L2.next = L3;
L4.next = L5;
L5.next = L6;
L6.next = L7;

console.log(addLists(L1, L4));
