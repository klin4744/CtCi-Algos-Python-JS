# Given two strings, write a method to decide if one is a permuation of the other


def isPermutation(str1, str2):
    map1 = {}
    map2 = {}
    for char in str1:
        if char in map1:
            map1[char] += 1
        else:
            map1[char] = 1
    for char in str2:
        if char in map2:
            map2[char] += 1
        else:
            map2[char] = 1
    for key in map1:
        if not key in map2 or map1[key] is not map2[key]:
            return False
    return True


print(isPermutation('abcdd', 'ddcba'))
print(isPermutation('abcbd', 'ddcba'))
