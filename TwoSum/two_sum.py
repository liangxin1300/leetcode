

def add_two(num, target):
    d = {}
    for index, number in enumerate(num):
        try:
            return [d[target-number], index]
        except:
            d[number] = index


def add_two2(num, target):
    d = {}
    for i in range(len(num)):
        if num[i] in d:
            return [d[num[i]], i]
        else:
            d[target-num[i]] = i

print(add_two([2,7,11,15], 9))
print(add_two2([2,7,11,15], 9))
