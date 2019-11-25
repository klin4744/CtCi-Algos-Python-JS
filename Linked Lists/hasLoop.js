// Given a linked list which might contain a loop, implement an algorithmn that returns the node at the beginning of a loop if one exists
class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

function hasLoop(node) {
   if (!node || !node.next) return false;
   let p1 = node;
   let p2 = node;
   let hasLoop = false;
   let loopLength = 1;
   // Check if it has a loop first
   while (p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      if (p1 === p2) {
         hasLoop = true;
         break;
      }
   }
   if (!hasLoop) return false;
   // If it does have a loop p1 and p2 will point to the same node at some point if they grow at different rates, here we are in a loop so we know that p2 will hit p1 if we move it around. Find the length of the loop.
   p2 = p2.next;
   while (p1 !== p2) {
      p2 = p2.next;
      loopLength++;
   }
   // Reset to the start and move one node the loop length ahead
   p1 = node;
   p2 = node;
   while (loopLength > 0) {
      p2 = p2.next;
      loopLength--;
   }
   // Loop until both nodes are equal, since one is the loop length ahead, when they are equal we have the start of the loop
   while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
   }
   return p1;
}
function getLoopStart(node) {
   if (hasLoop(node));
}

const L1 = new LinkedListNode(3);
const L2 = new LinkedListNode(5);
const L3 = new LinkedListNode(8);
const L4 = new LinkedListNode(1);
const L5 = new LinkedListNode(2);
L1.next = L2;
L2.next = L3;
L3.next = L4;
L4.next = L2;

console.log(hasLoop(L1));
