---
title: "Tuples"
draft: false
weight: 2
---

A Tuple is also an ordered collection of elements just like lists, but tuples are immutable. So you can not change the elements of a tuple after it is assigned (unlike lists where you are allowed to do so). This immutable nature makes tuples very useful when you don't want your data to be mutated through out the program. Along with this, tuples are generally used to store elements of different data types. A tuple can be created by placing all the elements inside parentheses `()`, separated by commas. 

```python

#creating a tuple of two elements of String type 
my_tuple = ('apple', 'orange')

```

{{% notice note %}}

Tuples can also be created without parentheses. However, it is a good practice to use them.

{{% /notice %}}

Tuple can also have elements of different types.

```python

#A tuple having elements of different data types
my_tuple = ('apple', 1, 4.5)

```

### Accessing the elements of a tuple

We can access the elements of a tuple by using indexes inside square bracket `[]` just like list. Note the index starts from 0. 

```python

#creating a tuple of three elements of String type 
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## prints apple
print(my_tuple[2]) ## prints mango

```

### Combine two tuples

We can combine two tuples by using `+` operator.

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

Since tuples are immutable, we can not change an element of the tuple. So `fruits[0] = 'lemon'` will give an error as here we are trying to change the element at index `0` of 'fruits'.
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

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>