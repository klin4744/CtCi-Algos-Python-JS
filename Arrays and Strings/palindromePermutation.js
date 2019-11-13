// Given a string, write a function to check if it is a permutation of a palindrome
function palindromePermutation(str) {
  const charCounts = {};
  let pairs = 0;
  let lengthWithoutSpaces = 0;
  for (let char of str.toLowerCase()) {
    if (char === " ") {
      continue;
    }
    if (charCounts[char]) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
    lengthWithoutSpaces++;
  }
  for (let key in charCounts) {
    if (charCounts[key] >= 2) {
      while (charCounts[key] >= 2) {
        charCounts[key] -= 2;
        pairs++;
      }
    }
  }
  return lengthWithoutSpaces - pairs * 2 <= 1;
}
console.log(palindromePermutation("Tact Coa"));
console.log(palindromePermutation("race      car"));
console.log(palindromePermutation("not a palindrome"));
