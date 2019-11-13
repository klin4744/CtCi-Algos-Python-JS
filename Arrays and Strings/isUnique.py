# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional datastructures?

# O(N) time, O(N) space


def isUnique(str):
    seen = {}
    for char in str:
        if char in seen:
            return False
        seen[char] = True
    return True


print(isUnique("abcd"))
print(isUnique("abcad"))
