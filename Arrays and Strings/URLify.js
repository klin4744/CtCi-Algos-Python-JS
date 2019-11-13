// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space to hold the additional characters, and that you are given the "true" length of the string

// our inputs are arrays here because strings are immutable in js

function URLify(arr, trueLength) {
   const numOfSpaces = getNumberOfSpaces(arr);
   let start = trueLength + numOfSpaces * 2 - 1;
   for (let i = trueLength - 1; i >= 0; i--) {
      const char = arr[i];
      if (char === ' ') {
         arr[start] = '%';
         arr[start - 1] = '0';
         arr[start - 2] = '2';
         start -= 3;
      } else {
         arr[start] = char;
         start -= 1;
      }
   }
   return arr.join('');
}
function getNumberOfSpaces(arr) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
         count++;
      }
   }
   return count;
}

console.log(URLify('Mr John Smith'.split(''), 17));
