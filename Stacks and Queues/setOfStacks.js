// Imagine a literal stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a datastructure set of stacks that mimicks this. Set of stacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.

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
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      return temp;
   }
   peek() {
      if (!this.head) throw new Error('List is empty!');
      return this.tail.val;
   }
}
class SetOfStacks {
   constructor(limit) {
      this.stacks = [new Stack()];
      this.limit = limit;
      this.currentStack = 0;
   }
   push(val) {
      if (this.stacks[this.currentStack].length < this.limit - 1) {
         this.stacks[this.currentStack].push(val);
      } else {
         this.stacks.push(new Stack());
         this.stacks[this.currentStack++].push(val);
      }
      return this;
   }
   pop() {
      return this.stacks[this.stacks.length - 1].pop();
   }
   peek() {
      return this.stacks[this.stacks.length - 1].peek();
   }
   popAt(idx) {
      const stackToVisit = Math.floor(idx / this.limit);
      if (this.stacks.length - 1 < stackToVisit)
         throw new Error("That index doesn't exist");
      let indexToVisit = idx % this.limit;
      const stack = this.stacks[stackToVisit];
      let currentNode = stack.head;
      while (indexToVisit > 0) {
         currentNode = currentNode.next;
         indexToVisit--;
      }
      if (!currentNode.prev) {
         stack.head = currentNode.next;
         currentNode.next = null;
         stack.head.prev = null;
      } else {
         currentNode.prev.next = currentNode.next;
         currentNode.prev = null;
         currentNode.next = null;
      }
      stack.length--;
      return currentNode;
   }
}

const set = new SetOfStacks(2);
set.push(1)
   .push(2)
   .push(3)
   .push(4)
   .popAt(2);
console.log(set);
