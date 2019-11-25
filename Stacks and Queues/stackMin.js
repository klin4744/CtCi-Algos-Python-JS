// How would you design a stack which, in addition to push and pop, has a function which returns the minimum element? Push, pop, and min should all operate in O(1) time

class LinkedListNode {
   constructor(val) {
      this.val = val;
      this.prevMin = null;
      this.next = null;
      this.prev = null;
   }
}
class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(val) {
      const newNode = new LinkedListNode(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.prev = this.tail;
         newNode.prevMin =
            newNode.prev.prevMin !== null
               ? Math.min(newNode.prev.prevMin, newNode.prev.val)
               : newNode.prev.val;
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   pop() {
      if (!this.head) throw new Error('Linked list is empty!');
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      return temp;
   }
   peek() {
      if (!this.head) throw new Error('Linked list is empty!');
      return this.tail.val;
   }
}
class Stack {
   constructor() {
      this.values = new LinkedList();
   }
   push(val) {
      return this.values.push(val);
   }
   pop() {
      return this.values.pop().val;
   }
   peek() {
      return this.values.peek();
   }
   getMin() {
      if (!this.values.length) return 'list is empty';
      return this.values.tail.prevMin !== null
         ? Math.min(this.values.tail.prevMin, this.values.tail.val)
         : this.values.tail.val;
   }
}

const stack = new Stack();
stack
   .push(1)
   .push(0)
   .push(10)
   .push(-10);
console.log(stack.getMin());
