// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional datastructures?

// O(N) time, O(N) space
function isUnique(str) {
   const dict = {};
   for (let char of str) {
      if (!dict[char]) {
         dict[char] = true;
      } else {
         return false;
      }
   }
   return true;
}

console.log(isUnique('abcde'));
console.log(isUnique('abcded'));
