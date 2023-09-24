---
title: "Built in Functions"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

There are many built-in functions in python that can be used to increase the ease of writing code. Let's discuss a few of them here.

# sort()
This function is used to sort the values in data structures such as arrays and lists.
```python
arr = [8,5,1,4,6]
arr.sort()
print('The sorted arr is :',arr)
#prints The sorted arr is [1,4,5,6,8]
```

# find()
Returns the first occurence of the input(pattern) to the find() provided in the given string.
```python
str1 = "Hello World"
index = str1.find("World)"
print(index) #prints 6
```

# len()
`len()` helps in finding out the size of the given data structure.
```python
arr = [10,5,4,2,3]
print(len(arr)) #prints 5
```

# isdigit()
This function returns `true` if the string passed as an argument consists of only digits; otherwise it returns `false`
```python
s = "123";  
print s.isdigit() #prints true

s = "Hello World";
print s.isdigit() #prints false

s = "123Hello"
print s.isdigit() #prints false as it has letters along with digits
```

# reverse()
This function is used to reverse the contents of an array or a list.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #prints [9,8,7,6,5]
```

# replace()
This function replaces the first argument passed to the function with the second argument in a given string.

```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #prints My name is Potter. Potter is a good boy.
```

# append()
This function is used to add a number, character or element of any data type to the end of a list or an array.
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #prints [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #prints [Harry,Ram,1,2,Jenifer]
```

# remove()
Removes the first occurence if argument passed for the given object. If you try to remove an element not in list, it would give an exception stating element not in the list.
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #prints 1,2,3,3

arr.remove(4) #gives an exception stating element not in the list
```

### Challenge 1
 Create an array name`arr`

- Initialize it to `[1,2,3,4,5]`

- Append the number `6` to it and print.

- Reverse `arr` and print it.

- Sort `arr` and print it.

- Print length of `arr`

- Remove the element 6 from `arr` and print it.

- Print the length of `arr`,

#### Expected output
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### Challenge 2
-Initialise a string `s` to "Hello all.Hello people".

-Find the occurence of the word `Hello` in the string `s` and print.

-Replace the word `Hello` to `Hi` in `s`.

-Find if the string `s` contains only digits and print the verdict.

#### Expected Output
```Output
    0
    Hi all.Hi people.
    False
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
