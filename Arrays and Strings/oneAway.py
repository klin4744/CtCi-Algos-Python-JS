def isOneAway(str1, str2):
    p1 = 0
    p2 = 0
    changes = 0
    while p1 < len(str1) or p2 < len(str2):
        if p2 >= len(str2) or str1[p1] != str2[p2]:
            if len(str1) > len(str2):
                p1 += 1
            elif len(str2) > len(str1):
                p2 += 1
            else:
                changes += 1
                p1 += 1
                p2 += 1
        else:
            p1 += 1
            p2 += 1
    return changes <= 1


print(isOneAway('pale', 'ple'))
print(isOneAway('pale', 'plel'))
print(isOneAway('pale', 'paee'))
