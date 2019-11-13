// Given two strings, write a method to decide if one is a permuation of the other
// Method 1 hashmap
function isPermutation(str1, str2) {
   if (str1.length !== str2.length) return false;
   const map1 = {};
   const map2 = {};
   for (let char of str1) {
      if (!map1[char]) {
         map1[char] = 1;
      } else {
         map1[char]++;
      }
   }
   for (let char of str2) {
      if (!map2[char]) {
         map2[char] = 1;
      } else {
         map2[char]++;
      }
   }
   if (Object.keys(map1).length !== Object.keys(map2).length) return false;
   for (key in map1) {
      if (map1[key] !== map2[key]) return false;
   }
   return true;
}

// Method 2
// Sort both strings and just compare each char, NOTE, in JS strings are not mutable but they are in other languages. This makes our algorithm take O(N) space unless our input is an array to begin with

console.log(isPermutation('abcdd', 'ddcba'));
console.log(isPermutation('abcbd', 'ddcba'));
