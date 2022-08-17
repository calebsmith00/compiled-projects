
def calculate(num, func):
    return func(num)

def add(num):
    index = 0
    total = 0
    for n in num:
        total += num[index]
        index += 1;
    return total 

def subtract(num):
    index = 0
    total = 0
    for n in num:
        total -= num[index]
        index += 1;
    return total 

def multiply(num):
    index = 0
    total = 1
    for n in num:
        total *= num[index]
        index += 1;
    return total 

def divide(num):
    index = 0
    total = 1
    for n in num:
        total /= num[index]
        index += 1;
    return total 

dispatcher = { 'add' : add, 'subtract' : subtract, 'multiply' : multiply, 'divide' : divide }

def getValues(num):
    # Remove any white space and return a list containing the values
    values = num.split(',')
    index = 0
    for i in values:
        values[index] = float(i.strip())
        index += 1
    return values

num = input('Enter your numbers separated by a comma: ')
operator = input('Enter your operator: ')
print('Your result is: ', calculate(getValues(num), dispatcher[operator]))