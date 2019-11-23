// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")

//  *
// "waterbottle"
//          *
// "erbottlewat"

function isSubstring(str1, str2) {
   if (str1.length !== str2.length) return false;
   let p2 = 0;
   while (p2 < str2.length) {
      if (str1.slice(0, str1.length - p2) === str2.slice(p2)) {
         break;
      }
      p2++;
   }
   return str1 === str2.slice(p2) + str2.slice(0, p2);
}

console.log(isSubstring('waterbottle', 'erbottlewat'));
console.log(isSubstring('carrace', 'racecar'));
console.log(isSubstring('carracer', 'racecars'));
