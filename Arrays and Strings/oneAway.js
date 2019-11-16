// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function isOneAway(str1, str2) {
   let numOfChanges = 0;
   let p1 = 0;
   let p2 = 0;
   while (p1 < str1.length || p2 < str1.length) {
      if (p1 >= str1.length || p2 >= str2.length || str1[p1] !== str2[p2]) {
         if (str1.length < str2.length && p2 < str2.length) {
            p2++;
         } else if (str2.length < str1.length && p1 < str1.length) {
            p1++;
         } else {
            numOfChanges++;
            p1++;
            p2++;
         }
      } else {
         p1++;
         p2++;
      }
   }
   return numOfChanges <= 1;
}

console.log(isOneAway('pale', 'ple'));
console.log(isOneAway('pale', 'plel'));
console.log(isOneAway('pale', 'paee'));
