// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g. if you have a tree with depth D, you'll have D linked lists)

class Tree {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   enqueue(val) {
      const newNode = new LinkedListNode(val);
      if (!this.head) {
         this.head = this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
   }
   dequeue() {
      if (!this.head) throw new Error('List is empty');
      const temp = this.head;
      if (this.head === this.tail) {
         this.head = this.tail = null;
      } else {
         this.head = this.head.next;
         temp.next = null;
      }
      this.length--;
      return temp;
   }
}

function listDepths(tree, depth = 0, listOfDepths = new Map()) {
   if (!tree) return listOfDepths;
   if (!listOfDepths.has(depth)) {
      listOfDepths.set(depth, new LinkedList());
   }
   listOfDepths.get(depth).enqueue(tree);
   if (tree.left) {
      listDepths(tree.left, depth + 1, listOfDepths);
   }
   if (tree.right) {
      listDepths(tree.right, depth + 1, listOfDepths);
   }
   return listOfDepths;
}

const node1 = new Tree(5);
const node2 = new Tree(4);
const node3 = new Tree(3);
const node4 = new Tree(2);
const node5 = new Tree(1);
const node6 = new Tree(10);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
console.log(listDepths(node1));
