---
title: "Tuple"
draft: false
weight: 10
---

Tuple is also a ordered collection of elements just like lists but tuple is immutable. So you can not change the elements of a tuple after it is assigned but for list you are allowed to do so. A tuple can be created by placing all the elements inside parentheses `()`, separated by commas. 

```python

#creating a tuple of two elements of String type 
my_tuple = ('apple', 'orange')

```

{{% notice note %}}

Tuple can also be created with out parentheses. However, it is a good practice to use them.

{{% /notice %}}

Tuple can also have the elements of different types.

```python

#A tuple having elements of different datatypes
my_tuple = ('apple', 1, 4.5)

```

### Accessing the elements of a tuple

We can access the elements of a tuple by using indexes inside square bracket `[]` just like list and the index starts from 0. 

```python

#creating a tuple of three elements of String type 
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## prints apple
print(my_tuple[2]) ## prints mango

```

### Combine two tuples

We can combine two tuple by using `+` operator.

```python

fruits = ('apple', 'orange', 'mango')
numbers = (1, 2, 3)

#Combine two tuples fruits and numbers
combined_tuple = fruits + numbers

print(combined_tuple) ## prints ('apple', 'orange', 'mango', 1, 2, 3)

```

### Length of a tuple

`len(tuple)` function gives the number of elements present in the tuple.

```python

fruits = ('apple', 'orange', 'mango')

print(len(fruits))  ## prints 3

```

### Reassign a tuple

As we know tuple is immutable, we can not change and element of the tuple. So `fruits[0] = 'lemon'` will give error as here we are trying to change the element at index `0` of 'fruits'.
But we can reassign a tuple.

```python

my_tuple = ('apple', 'orange', 'mango')

print(my_tuple)  ## prints ('apple', 'orange', 'mango')

# ressigning my_tuple
my_tuple = (1, 2, 3) 

print(my_tuple)  ## prints (1, 2, 3)

```

### Deleting a tuple

We can delete a tuple entirely using the keyword `del`.


```python

fruits = ('apple', 'orange', 'mango')

print(fruits)  ## prints ('apple', 'orange', 'mango')

# Deleting fruits
del fruits 

print(fruits)  ## Gives ERROR as tuple fruits is no longer present 

```

### Try it yourself

<iframe height="600px" width="100%" 
 src="https://repl.it/@nuevofoundation/python-blank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>