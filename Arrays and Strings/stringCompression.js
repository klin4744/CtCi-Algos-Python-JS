// Implement a method to perform basic string compression using the counts of repeated characters. For example the string aabcccccaaa would become a1b1c5a3. If the compressed string would not become smaller than the original string you should return the original string. You can assume the string only has uppercase and lowercase letters (a-z)

function compress(str) {
   let newStr = '';
   let characterCount = 1;
   let previousChar = str[0];
   for (let i = 1; i <= str.length; i++) {
      if (i >= str.length) {
         newStr += previousChar + characterCount;
         break;
      }
      const currentChar = str[i];
      if (currentChar === previousChar) {
         characterCount++;
      } else {
         newStr += previousChar + characterCount;
         previousChar = currentChar;
         characterCount = 1;
      }
   }
   return newStr.length < str.length ? newStr : str;
}

console.log(compress('aabcccccaaaa'));
