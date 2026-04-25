---
title: "Answer Key"
date: 2026-04-25T00:00:00Z
weight: 15
draft: false
hidden: true
---

# Python Basics - Answer Key

{{% notice note %}}
Many challenges in this workshop are open-ended and encourage creativity. The solutions below are **examples** — your answers may look different and still be correct! What matters is that your code runs and produces the expected behavior.
{{% /notice %}}

---

## Basics

### Writing to Console - Challenge 1

```python
print("Hello, World!")
```

**Expected output:**
```
Hello, World!
```

---

### Writing to Console - Challenge 2

```python
print("My name is Nuvi!")
print("I love Python!")
```

**Expected output:**
```
My name is Nuvi!
I love Python!
```

{{% notice tip %}}
Your two `print` statements can say anything you like — the key is using two separate `print()` calls.
{{% /notice %}}

---

### Variables - Challenge

Given `comp = "Computer"` and `five = 5`, produce the following output:

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

**Solution:**

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

{{% notice tip %}}
Notice that `+` **concatenates** (joins) strings but **adds** numbers. `comp + comp` produces `"ComputerComputer"`, while `five + five` produces `10`.
{{% /notice %}}

---

### Reading from Console - Challenge

```python
print("Welcome!")
print("How can I help you today?")
value = input()
print("You asked: " + value + "?")
print("I don't know the answer to " + value + ". Goodbye!")
```

**Example run:**
```
Welcome!
How can I help you today?
what is Python          ← (user types this)
You asked: what is Python?
I don't know the answer to what is Python. Goodbye!
```

---

## Data Types

### Strings - Challenge 1

Combine a first and last name into a full name:

```python
first = "Nuevo"
last = "Foundation"
print(first + " " + last)
```

**Expected output:**
```
Nuevo Foundation
```

---

### Strings - Challenge 2

Print `"Nuevo Foundation"` three different ways, each using exactly two `+` operators:

```python
# Way 1
print("Nuevo" + " " + "Foundation")

# Way 2
print("Nuevo " + "Founda" + "tion")

# Way 3
print("Nu" + "evo Foundati" + "on")
```

{{% notice tip %}}
There are many valid solutions! Any combination that uses two `+` signs and produces `"Nuevo Foundation"` is correct.
{{% /notice %}}

---

### Numbers - Challenge 1

```python
print(2 - 19)
print((3 + 5) * 6)
print((13 + 5 * 8) / (6 - (3 + 7)))
```

**Expected output:**
```
-17
48
-13.25
```

**Math breakdown for the third expression:**

- Numerator: `13 + 5 * 8` → `13 + 40` → `53` (multiplication happens before addition)
- Denominator: `6 - (3 + 7)` → `6 - 10` → `-4`
- Result: `53 / -4` → `-13.25`

---

### Numbers - Challenge 2

```python
print("527 time 199 is: " + str(527 * 199))
```

**Expected output:**
```
527 time 199 is: 104873
```

{{% notice tip %}}
We must use `str()` to convert the number to a string before concatenating it with `+`.
{{% /notice %}}

---

### Booleans - Challenge 1

```python
print(5 + 8 < 10)
print((3 + 5) * 6 == (65 - 17))
```

**Expected output:**
```
False
True
```

**Explanation:**

- `5 + 8 < 10` → `13 < 10` → `False`
- `(3 + 5) * 6 == (65 - 17)` → `48 == 48` → `True`

---

### Booleans - Challenge 2

```python
print(54 < (10 + 32))
print((37 / 5) != 7)
print("Hello" + "World" == "Hello World")
print(False == False)
```

**Expected output:**
```
False
True
False
True
```

**Explanation:**

- `54 < (10 + 32)` → `54 < 42` → `False`
- `(37 / 5) != 7` → `7.4 != 7` → `True`
- `"Hello" + "World" == "Hello World"` → `"HelloWorld" == "Hello World"` → `False` (no space!)
- `False == False` → `True`

---

### Booleans - Theory

```python
print((11 - 2 < 10) and (7 + 3 > 10))
print((True or 3 < 1) and (False or 3 > 1))
```

**Expected output:**
```
False
True
```

**Explanation:**

- `(11 - 2 < 10) and (7 + 3 > 10)` → `(9 < 10) and (10 > 10)` → `True and False` → `False`
- `(True or 3 < 1) and (False or 3 > 1)` → `(True or False) and (False or True)` → `True and True` → `True`

---

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

**Example run:**
```
What's your name?
Nuvi           ← (user types this)
That's my name too!
```

{{% notice tip %}}
You choose what name to check for and what messages to print. The important thing is using `if` and `else` correctly.
{{% /notice %}}

---

### Else-if Statement - Challenge

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

**Example run:**
```
What is your favorite color?
green          ← (user types this)
Green is the color of nature!
```

{{% notice tip %}}
Your `elif` example can check for any values you like — the goal is to practice the `if` / `elif` / `else` pattern.
{{% /notice %}}

---

### Loops - Challenge 1

```python
foodList = ["apples", "ice cream", "pizza", "bananas", "carrots", "squash", "cucumbers", "sandwich", "oatmeal", "cookies", "cake", "spinach", "kale"]
least_fav = input("What's your least favorite food? ")
for food in foodList:
    if food == least_fav:
        break
    print("I like " + food)
```

**Example run (if user enters "carrots"):**
```
What's your least favorite food? carrots
I like apples
I like ice cream
I like pizza
I like bananas
```

The loop prints foods until it reaches the least favorite, then `break` stops the loop.

---

### Loops - Challenge 2

```python
numList = [364, 32, 459, 21, 529, 324, 543, 42, 1, 643, 24, 524, 534, 632, 163, 432, 643, 357, 136, 234]
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

**Example run (searching for 42):**
```
Enter a number: 42
Found it!
```

{{% notice tip %}}
The predefined list comes from the workshop. The key concept is using `break` to stop searching once the number is found.
{{% /notice %}}

---

### Nested Loops - Challenge 1

Modify the while loop values:

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

**Expected output:**
```
Outer: 0 0
Inner: 0 0
Inner: 0 1
Inner: 0 2
Inner: 0 3
Inner: 0 4
Outer: 1 0
Inner: 1 0
Inner: 1 1
Inner: 1 2
Inner: 1 3
Inner: 1 4
Outer: 2 0
Inner: 2 0
Inner: 2 1
Inner: 2 2
Inner: 2 3
Inner: 2 4
```

{{% notice tip %}}
Notice that `y` is reset to `0` after each outer loop iteration. Experiment with different values to see how the output changes!
{{% /notice %}}

---

### Nested Loops - Challenge 2

Modify the for loop:

```python
for n in range(0, 3):
    for m in range(0, 3):
        print("(", n, ",", m, ")", end=" ")
    print("")
```

**Expected output:**
```
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

---

### Nested Loops - Challenge 3

Print a number triangle:

```python
for i in range(1, 6):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

**Expected output:**
```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
```

**How it works:** The outer loop controls the row (1 through 5). The inner loop prints numbers from 1 up to the current row number. `end=" "` keeps output on the same line, and `print()` moves to the next line after each row.

---

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

**Example run:**
```
Do you like orange? yes
Do you like kiwi? no
Do you like banana? yes
Do you like apple? yes
Do you like mango? no
Do you like lemon? yes
What fruit would you like to add? grape
You like 5 fruits!
['orange', 'banana', 'apple', 'lemon', 'grape']
```

{{% notice warning %}}
We use `fruits[:]` (a copy of the list) in the `for` loop because modifying a list while iterating over it directly can skip elements.
{{% /notice %}}

---

### Tuples - Challenge

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

**Example run:**
```
Do you like orange? yes
Do you like kiwi? no
Do you like banana? yes
Do you like apple? yes
Do you like mango? no
Do you like lemon? yes
What fruit would you like to add? grape
You like 5 fruits!
('orange', 'banana', 'apple', 'lemon', 'grape')
```

{{% notice tip %}}
Tuples are **immutable** — you can't add or remove items directly. Instead, we build a new list of liked fruits and convert it back to a tuple with `tuple()`.
{{% /notice %}}

---

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

{{% notice tip %}}
Sets are **unordered**, so the fruits may print in a different order each time. We convert to `list(fruits)` before iterating because you can't modify a set while looping over it. We use `discard()` instead of `remove()` — `discard` won't raise an error if the item isn't found.
{{% /notice %}}

---

## Functions

### Functions - Challenge 1

```python
def addNumbers(number1, number2):
    print(number1 + number2)

addNumbers(3, 5)
```

**Expected output:**
```
8
```

---

### Functions - Challenge 2

```python
def add(number1, number2):
    return number1 + number2

value2 = add(2, 3)
print("This should print 5: " + str(value2))
```

**Expected output:**
```
This should print 5: 5
```

{{% notice tip %}}
The difference from Challenge 1 is using `return` instead of `print` inside the function. `return` sends the value back to the caller so it can be stored in a variable.
{{% /notice %}}

---

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

**Expected output:**
```
3
10
2.5
```

---

### Methods - Challenge 1

```python
arr = [1, 2, 3, 4, 5]
arr.append(6)
print(arr)
arr.reverse()
print(arr)
arr.sort()
print(arr)
print(len(arr))
arr.remove(6)
print(arr)
print(len(arr))
```

**Expected output:**
```
[1, 2, 3, 4, 5, 6]
[6, 5, 4, 3, 2, 1]
[1, 2, 3, 4, 5, 6]
6
[1, 2, 3, 4, 5]
5
```

---

### Methods - Challenge 2

```python
s = "Hello all.Hello people"
print(s.find("Hello"))
print(s.replace("Hello", "Hi"))
print(s.isdigit())
```

**Expected output:**
```
0
Hi all.Hi people
False
```

**Explanation:**

- `find("Hello")` returns `0` — the index of the first occurrence.
- `replace("Hello", "Hi")` replaces **all** occurrences of `"Hello"` with `"Hi"`.
- `isdigit()` returns `False` because the string contains letters, not just digits.

---

### Math Functions - Challenge

```python
nums = []
for i in range(5):
    nums.append(int(input("Enter a number: ")))
result = pow(min(nums), max(nums))
print(result)
```

**Example run:**
```
Enter a number: 2
Enter a number: 7
Enter a number: 4
Enter a number: 11
Enter a number: 9
2048
```

**Explanation:** With the inputs above, `min(nums)` is `2` and `max(nums)` is `11`. `pow(2, 11)` = 2^11 = `2048`.
