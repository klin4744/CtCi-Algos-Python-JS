// Queue via stacks - Implement a my queue queue class that implements a queue using two stacks

class MyQueue {
   constructor() {
      this.stack1 = [];
      this.stack2 = [];
   }
   push(val) {
      if (this.stack2.length) {
         while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
         }
      }
      this.stack1.push(val);
      return this;
   }
   pop() {
      if (!this.stack2.length) {
         while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
         }
      }
      return this.stack2.pop();
   }
}

const queue = new MyQueue();
queue
   .push(1)
   .push(2)
   .push(3)
   .push(4);
console.log(queue.pop());
console.log(queue.pop());
queue.push(5);
console.log(queue);
