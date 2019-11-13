# Get all string permuations
def getPermutations(str):
    if(len(str) <= 1):
        return set({str})
    permutations = set()
    strWithoutLastChar = str[0:-1]
    lastChar = str[-1]
    permutationsWithoutLastChar = getPermutations(strWithoutLastChar)
    for item in permutationsWithoutLastChar:
        i = 0
        while i <= len(item):
            permutation = (
                item + lastChar) if i is len(item) else item[0:i] + lastChar + item[i:len(str)]
            permutations.add(permutation)
            i += 1
    return permutations


print(getPermutations('abc'))
