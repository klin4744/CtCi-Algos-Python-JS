// An animal shelter, which holds only dogs and cars, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" of all animals at the shelter or they can select whether they prefer a dog or a cat. They cannot select which specific animal they would like. Create the datastructures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use a linked list.

class Node {
   constructor(val, priority) {
      this.val = val;
      this.priority = priority;
      this.next = null;
      this.prev = null;
   }
}
class Queue {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   enqueue(val, priority) {
      const newNode = new Node(val, priority);
      if (!this.head) {
         this.head = this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.length++;
   }
   dequeue() {
      if (!this.head) throw new Error('Queue has no items!');
      const nodeToRemove = this.head;
      if (this.head === this.tail) {
         this.head = this.tail = null;
      } else {
         nodeToRemove.next.prev = null;
         this.head = nodeToRemove.next;
      }
      this.length--;
      nodeToRemove.next = null;
      return nodeToRemove;
   }
   peek() {
      if (!this.head) throw new Error('List is empty!');
      return this.head;
   }
   print() {
      let curretNode = this.head;
      while (curretNode) {
         console.log(curretNode.val);
         curretNode = curretNode.next;
      }
   }
}
class Animal {
   constructor(name) {
      this.name = name;
      this.type = null;
   }
}
class Cat extends Animal {
   constructor(name) {
      super(name);
      this.type = 'cat';
   }
}
class Dog extends Animal {
   constructor(name) {
      super(name);
      this.type = 'dog';
   }
}
class AnimalShelter {
   constructor() {
      this.cats = new Queue();
      this.dogs = new Queue();
      this.priority = 0;
   }
   enqueue(pet) {
      if (pet.type === 'cat') {
         this.cats.enqueue(pet, this.priority);
      } else {
         this.dogs.enqueue(pet, this.priority);
      }
      this.priority++;
      return this;
   }
   dequeueAny() {
      if (this.cats.length > 0 && this.dogs.length > 0) {
         if (this.cats.peek().priority < this.dogs.peek().priority) {
            return this.cats.dequeue();
         } else {
            return this.dogs.dequeue();
         }
      } else if (this.cats.length > 0) {
         return this.cats.dequeue();
      } else {
         return this.dogs.dequeue();
      }
   }
   dequeueDog() {
      if (!this.dogs.length) throw new Error('No more Dogs!');
      return this.dogs.dequeue();
   }
   dequeueCat() {
      if (!this.cats.length) throw new Error('No more Cats!');
      return this.cats.dequeue();
   }
}

const shelter = new AnimalShelter();
const dog1 = new Dog('bob');
const dog2 = new Dog('jordan');
const dog3 = new Dog('mochi');
const cat1 = new Cat('rufus');
const cat2 = new Cat('tibbers');
const cat3 = new Cat('thomas');
shelter
   .enqueue(dog1)
   .enqueue(cat2)
   .enqueue(dog3)
   .enqueue(cat1)
   .enqueue(dog2)
   .enqueue(cat3);
console.log(shelter.dequeueAny());
console.log(shelter.dequeueDog());
console.log(shelter.dequeueAny());
