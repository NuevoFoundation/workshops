---
title: "Python: Basics - Answer Key"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions. Many challenges have multiple valid answers, especially those that ask you to create your own examples. Your solution is correct if it produces the expected output!
{{% /notice %}}

## Basics

### Writing to Console - Challenge 1

```python
print("Hello, World!")
```

Output:
```
Hello, World!
```

### Writing to Console - Challenge 2

Add a second print statement with any text you like:

```python
print("Hello, World!")
print("I am learning Python!")
```

### Variables - Challenge

Using `comp = "Computer"` and `five = 5`, print the following output:

```python
comp = "Computer"
five = 5
print(comp)
print(five)
print(comp + comp)
print(five + five)
print(comp + comp + comp)
print(five + five + five)
```

Output:
```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

### Reading from Console - Challenge

```python
print("Welcome!")
print("How can I help you today?")
value = input()
print("You asked: " + value + "?")
print("I don't know the answer to " + value + ". Goodbye!")
```

Example output (if user types "What is Python"):
```
Welcome!
How can I help you today?
You asked: What is Python?
I don't know the answer to What is Python. Goodbye!
```

## Data Types

### Strings - Challenge 1

Combine your first and last name:

```python
first = "Nuevo"
last = "Foundation"
print(first + " " + last)
```

Output:
```
Nuevo Foundation
```

### Strings - Challenge 2

Three ways to print "Nuevo Foundation" using two `+` symbols each:

```python
print("Nuevo" + " " + "Foundation")
print("Nuevo " + "Foun" + "dation")
print("Nue" + "vo Foundati" + "on")
```

There are many valid solutions! Any combination that produces "Nuevo Foundation" using exactly two `+` symbols works.

### Numbers - Challenge 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

Output:
```
-17
48
-13.25
```

Math breakdown for the third expression:
- Numerator: 13 + (5 * 8) = 13 + 40 = 53
- Denominator: 6 - (3 + 7) = 6 - 10 = -4
- Result: 53 / -4 = -13.25

### Numbers - Challenge 2

{{% notice warning %}}
The workshop text says `"527 time 199 is: __"` — this appears to be a typo for "times" in the original workshop. The answer below matches the workshop text exactly.
{{% /notice %}}

```python
print("527 time 199 is: " + str(527 * 199))
```

Output:
```
527 time 199 is: 104873
```

Remember to use `str()` to convert the number to a string before combining with `+`.

### Booleans - Challenge 1

{{% notice warning %}}
The workshop code for the second expression has a misplaced parenthesis: `print((3 + 5) * 6) == (65 - 17)`. This will print `48` but won't show the boolean result. The corrected version below places the comparison inside `print()`.
{{% /notice %}}

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

Output:
```
False
True
```

- 5 + 8 = 13, and 13 < 10 is `False`
- (3 + 5) * 6 = 48, and 65 - 17 = 48, so 48 == 48 is `True`

### Booleans - Challenge 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hello" + "World" == "Hello World")
print(False == False)
```

Output:
```
False
True
False
True
```

- 54 < 42 is `False`
- 37 / 5 = 7.4, and 7.4 != 7 is `True`
- "Hello" + "World" = "HelloWorld" (no space!), so "HelloWorld" == "Hello World" is `False`
- False == False is `True`

### Booleans - Theory Questions

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

Output:
```
False
True
```

- (11 - 2 < 10) = (9 < 10) = `True`, (7 + 3 > 10) = (10 > 10) = `False`. True `and` False = `False`
- (True `or` False) = `True`, (False `or` True) = `True`. True `and` True = `True`

### Booleans - Challenge 3

This challenge is open-ended. Here are some example expressions you could try:

```python
print(100 > 99)           # True
print(len("hello") == 5)  # True
print(10 % 3 == 0)        # False (10 divided by 3 has remainder 1)
print(not True)            # False
```

Any valid boolean expression works!

## Conditional Statements and Loops

### Conditional Statements - Challenge

```python
print("What's your name?")
name = input()
if name == "Nuvi":
    print("That's my name too!")
else:
    print("Nice to meet you, " + name + "!")
```

Your name and responses will be different. The important thing is the `if`/`else` structure.

### Else-if Statement - Challenge

Create your own `elif` example:

```python
print("What is your favorite color?")
color = input()
if color == "blue":
    print("Blue is a cool color!")
elif color == "red":
    print("Red is a warm color!")
elif color == "green":
    print("Green is the color of nature!")
else:
    print(color + " is a nice color!")
```

### Loops - Challenge 1

```python
foodList = ["apples", "ice cream", "pizza", "bananas", "carrots", "squash", "cucumbers", "sandwich", "oatmeal", "cookies", "cake", "spinach", "kale"]
least_fav = input("What's your least favorite food? ")
for food in foodList:
    if food == least_fav:
        break
    print("I like " + food)
```

If user enters "pizza", output:
```
I like apples
I like ice cream
```

The loop stops when it reaches the least favorite food.

### Loops - Challenge 2

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
search_num = int(input("Enter a number: "))
found = False
for num in numList:
    if num == search_num:
        print("Found it!")
        found = True
        break
if not found:
    print("Not found.")
```

### Nested Loops - Challenge 1

Modify the while loop values and predict the output:

```python
x = 0
y = 0
while x < 3:
    print("Outer:", x, y)
    while y < 5:
        print("Inner:", x, y)
        y += 1
    x += 1
    y = 0
```

The outer loop runs 3 times (x = 0, 1, 2). For each outer iteration, the inner loop runs 5 times (y = 0 through 4). Notice `y = 0` resets after the inner loop.

### Nested Loops - Challenge 2

```python
for n in range(0, 3):
    for m in range(0, 3):
        print("(", n, ",", m, ")", end=" ")
    print("")
```

Output:
```
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

### Nested Loops - Challenge 3

Print the number triangle pattern:

```python
for i in range(1, 6):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

Output:
```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
```

The outer loop controls the rows (1 to 5). The inner loop prints numbers from 1 up to the current row number.

## Data Structures

### Lists - Challenge

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
for fruit in fruits[:]:
    response = input("Do you like " + fruit + "? ")
    if response == "no":
        fruits.remove(fruit)
new_fruit = input("What fruit would you like to add? ")
fruits.append(new_fruit)
print("You like " + str(len(fruits)) + " fruits!")
print(fruits)
```

We use `fruits[:]` to iterate over a copy of the list while modifying the original. This avoids skipping items when removing.

### Tuples - Challenge

Since tuples are immutable (cannot be changed), we build a new one:

```python
fruits = ('orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon')
liked = []
for fruit in fruits:
    response = input("Do you like " + fruit + "? ")
    if response != "no":
        liked.append(fruit)
new_fruit = input("What fruit would you like to add? ")
liked.append(new_fruit)
fruits = tuple(liked)
print("You like " + str(len(fruits)) + " fruits!")
print(fruits)
```

### Sets - Challenge

```python
fruits = {'orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon'}
for fruit in list(fruits):
    response = input("Do you like " + fruit + "? ")
    if response == "no":
        fruits.discard(fruit)
new_fruit = input("What fruit would you like to add? ")
fruits.add(new_fruit)
print("You like " + str(len(fruits)) + " fruits!")
print(fruits)
```

Sets use `discard()` instead of `remove()` (discard won't raise an error if the item isn't found), and `add()` instead of `append()`. Sets are also unordered, so the output order may differ each time.

## Functions

### Functions - Challenge 1

```python
def addNumbers(number1, number2):
    print(number1 + number2)

addNumbers(3, 5)
```

Output:
```
8
```

### Functions - Challenge 2

```python
def add(number1, number2):
    return number1 + number2

value2 = add(2, 3)
print("This should print 5: " + str(value2))
```

Output:
```
This should print 5: 5
```

The difference from Challenge 1: `return` sends the value back so it can be stored in a variable, while `print` only displays it.

### Functions - Challenge 3

```python
def subtract(number1, number2):
    return number1 - number2

def multiply(number1, number2):
    return number1 * number2

def divide(number1, number2):
    return number1 / number2

print(str(subtract(5, 2)))   # 3
print(str(multiply(5, 2)))   # 10
print(str(divide(5, 2)))     # 2.5
```

### Built in Functions - Challenge 1

{{% notice warning %}}
The workshop page "Built in Functions" contains Python 2 syntax (`print s.isdigit()` without parentheses) and a `find()` example with a misplaced closing parenthesis. The answers below use correct Python 3 syntax.
{{% /notice %}}

```python
arr = [1, 2, 3, 4, 5]
arr.append(6)
print(arr)        # [1, 2, 3, 4, 5, 6]
arr.reverse()
print(arr)        # [6, 5, 4, 3, 2, 1]
arr.sort()
print(arr)        # [1, 2, 3, 4, 5, 6]
print(len(arr))   # 6
arr.remove(6)
print(arr)        # [1, 2, 3, 4, 5]
print(len(arr))   # 5
```

### Built in Functions - Challenge 2

```python
s = "Hello all.Hello people"
print(s.find("Hello"))           # 0
print(s.replace("Hello", "Hi"))  # Hi all.Hi people
print(s.isdigit())               # False
```

- `find()` returns the index of the first occurrence (0)
- `replace()` replaces all occurrences
- `isdigit()` returns False because the string contains letters

### Math Functions - Challenge

```python
nums = []
for i in range(5):
    nums.append(int(input("Enter a number: ")))
result = pow(min(nums), max(nums))
print(result)
```

Example: if the user enters 2, 7, 4, 11, 9:
- `min(nums)` = 2
- `max(nums)` = 11
- `pow(2, 11)` = 2048

**Bonus** (broken into functions):

```python
def get_numbers():
    nums = []
    for i in range(5):
        nums.append(int(input("Enter a number: ")))
    return nums

def calculate(nums):
    return pow(min(nums), max(nums))

numbers = get_numbers()
print(calculate(numbers))
```
