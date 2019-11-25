// Implement a function to check if a linked list is a palindrome

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function isPalindrome(list) {
   if (!list) return false;
   const stack = [];
   let slowNode = list;
   let fastNode = list;
   while (fastNode && fastNode.next) {
      stack.push(slowNode);
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
   }
   if (fastNode) {
      slowNode = slowNode.next;
   }
   while (slowNode) {
      if (stack.pop().val !== slowNode.val) {
         return false;
      }
      slowNode = slowNode.next;
   }
   return true;
}
const L1 = new LinkedListNode('a');
const L2 = new LinkedListNode('b');
const L3 = new LinkedListNode('b');
const L4 = new LinkedListNode('a');

L1.next = L2;
L2.next = L3;
L3.next = L4;

console.log(isPalindrome(L1));
