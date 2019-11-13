def URLify(arr, length):
    num_of_spaces = getSpaces(arr)
    newIndex = length + num_of_spaces * 2 - 1
    oldIndex = length - 1
    while oldIndex >= 0:
        char = arr[oldIndex]
        if char is " ":
            arr[newIndex] = "0"
            arr[newIndex - 1] = "2"
            arr[newIndex - 2] = "%"
            newIndex -= 3
        else:
            arr[newIndex] = char
            newIndex -= 1
        oldIndex -= 1
    return arr


def getSpaces(arr):
    count = 0
    for char in arr:
        if char is " ":
            count += 1
    return count


l = [None] * 21
l[0] = "M"
l[1] = "r"
l[2] = " "
l[3] = "J"
l[4] = "o"
l[5] = "h"
l[6] = "n"
l[7] = " "
l[8] = "S"
l[9] = "m"
l[10] = "i"
l[11] = "t"
l[12] = "h"
print(URLify(l, 17))
