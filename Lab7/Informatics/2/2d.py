def sign(a):
    if (a < 0):
        return -1
    if (a == 0):
        return 0
    if (a > 0):
        return 1

b = int(input())
print(sign(b))