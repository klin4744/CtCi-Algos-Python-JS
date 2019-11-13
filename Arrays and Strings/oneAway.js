// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function isOneAway(str1, str2) {
  let numOfChanges = Math.abs(str1.length - str2.length);
  let map1 = {};
  let map2 = {};
  for (let char of str1) {
    if (map1[char]) {
      map1[char] += 1;
    } else {
      map1[char] = 1;
    }
  }
  for (let char of str2) {
    if (map2[char]) {
      map2[char] += 1;
    } else {
      map2[char] = 1;
    }
  }
  for (let key of map1) {
    if (!map2[key] || map1[key] !== map2[key]) {
      numOfChanges++;
    }
  }
  return numOfChanges <= 1;
}

console.log(isOneAway("pale", "ple"));
