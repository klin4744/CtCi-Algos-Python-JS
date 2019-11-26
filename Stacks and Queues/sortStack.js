class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
   }
}
class Stack {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(val) {
      const newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.prev = this.tail;
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   pop() {
      if (!this.head) throw new Error('List is empty!');
      let temp = this.tail;
      if (this.head === this.tail) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = this.tail.prev;
         this.tail.next = null;
         temp.prev = null;
      }
      this.length--;
      return temp;
   }
   peek() {
      if (!this.head) throw new Error('List is empty!');
      return this.tail.val;
   }
   sort() {
      const tempStack = new Stack();
      while (this.length > 0) {
         if (tempStack.length === 0 || tempStack.peek() <= this.peek()) {
            tempStack.push(this.pop().val);
         } else {
            const temp = this.pop();
            let tempLength = this.length;
            while (tempStack.length > 0 && tempStack.peek() > temp.val) {
               this.push(tempStack.pop().val);
            }
            let diff = Math.abs(tempLength - this.length);
            tempStack.push(temp.val);
            while (diff > 0) {
               tempStack.push(this.pop().val);
               diff--;
            }
         }
      }
      this.head = tempStack.head;
      this.tail = tempStack.tail;
   }
   print() {
      let curretNode = this.head;
      while (curretNode) {
         console.log(curretNode.val);
         curretNode = curretNode.next;
      }
   }
}
const stack = new Stack();
stack
   .push(3)
   .push(1)
   .push(9)
   .push(2)
   .push(4);
stack.sort();
stack.print();
