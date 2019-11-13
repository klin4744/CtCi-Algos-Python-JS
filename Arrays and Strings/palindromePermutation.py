def palindromePermutation(str):
    lengthWithoutSpaces = 0
    charCounts = {}
    pairs = 0
    for char in str:
        if char is " ":
            continue
        lowerChar = char.lower()
        if lowerChar in charCounts:
            charCounts[lowerChar] += 1
        else:
            charCounts[lowerChar] = 1
        lengthWithoutSpaces += 1
    for key in charCounts:
        while charCounts[key] >= 2:
            pairs += 1
            charCounts[key] -= 2
    return lengthWithoutSpaces - pairs * 2 <= 1


print(palindromePermutation("Tact Coa"))
print(palindromePermutation("race      car"))
print(palindromePermutation("not a palindrome"))
