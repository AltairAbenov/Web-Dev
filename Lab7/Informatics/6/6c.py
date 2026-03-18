def xor(x,y):
    if (x == True or y == True) and not (x == True and y == True):
        return 1
    else:
        return 0
        
a = int(input())
b = int(input())
print(xor(a,b))