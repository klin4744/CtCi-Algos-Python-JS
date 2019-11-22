// function reverseFactorial(n) {
//    let divisor = 2;
//    while (n / divisor > 1) {
//       n /= divisor;
//       divisor++;
//    }
//    if (n / divisor !== 1)
//       throw new Error(
//          "Not a proper factorial, can't be reversed to a whole number",
//       );
//    return n;
// }
// console.log(reverseFactorial(120));
// console.log(reverseFactorial(6));
// console.log(reverseFactorial(6 * 5 * 4 * 3 * 2 * 1));
// console.log(reverseFactorial(6 * 4 * 3 * 2 * 1));

function wordPattern(pattern, str) {
   let strArr = str.split(' ');
   if (pattern.length !== strArr.length) return false;
   let memo = new Map();
   for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      let word = strArr[i];
      if (!memo.has(char)) {
         memo.set(char, word);
      } else {
         if (memo.get(char) !== word) return false;
      }
   }
   return true;
}

console.log(wordPattern('abba', 'hi bye bye hi'));
console.log(wordPattern('abba', 'hi bye bye lie'));
