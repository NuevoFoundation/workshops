---
title: "Built in Functions"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 4
--- 

There are many built-in functions in python that can be used to increase the ease of writing code. Lets discuss few of them here.

# sort()

This function is used to sort the values in datastructures such as arrays,list.
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
len() helps in finding out the size of the given datastructure.
```python
arr = [10,5,4,2,3]
print(len(arr)) #prints 5
```

# isdigit()
This function returns true if string passed as an arguments consists of only digits int else it returns false.
```python
s = "123";  
print str.isdigit() #prints true

s = "Hello World";
print str.isdigit() #prints false
```

# reverse()
This function is used to reverse the contents of the list.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #prints [9,8,7,6,5]
```
# replace()

This function replaces the first argument passed to the function with the second argument in a given string.

```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry","Potter")
print(final_str) #prints My name is Potter. Potter is a good boy.
```

# append()

This function is used to add a number, character or element of any data type to the end of the list.
```python
arr = [1,2,3,4,5];
arr.append( 6 );
print(arr) #prints [1,2,3,4,5,6]
```
# remove()
Removes the first occurence if argument passed for the given object.
```python
arr = [ 1,1,2,3,3 ]  
arr.remove(1)  
print(arr) #prints 1,2,3,3
```
### Challenge 1
-Create a array name`arr`

-Initialse it to [1,2,3,4,5]

-Append a number `6` to it and print.

-Reverse `arr` and print

-Sort `arr` and print it.

-Print length of `arr`

-Remove the element 6 from `arr` and print it.

-Print the length of `arr`

# Expected output

    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
### Challenge 2

# Expected Output
-Initialise a string `s` to "Hello all.Hello people".

-Find the occurence of the word `Hello` in the string `s` and print.

-Replace the word `Hello` to `Hi` in `s`.

-Find if the string `s` contains only digits and print the verdict.

    0
    Hi all.Hi people.
    False
<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
