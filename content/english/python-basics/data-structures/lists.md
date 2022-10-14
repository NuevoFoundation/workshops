---
title: "Lists"
draft: false
weight: 1
---

Lists are the ordered collection of items and can be written as comma separated values inside square bracket `[]`. As we saw in our loops lesson, lists can be of any data type, for example strings or integers. 

```python
#Creating a list of 5 fruits
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']
```

If you want to refer to a specific element of a list, you can do so by using indexes (position) inside square bracket. The first element is index (position) `0` and the list goes up to the `(number of elements in the list - 1)`. So, a list having 6 elements will have indices from 0 to 5. 

```python
#Creating a list of 5 fruits
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']

#Print element at index 2
print(fruits[2])     ##it prints banana
```

**Index** | **Item**
-------|-------
0 | orange
1 | apple
2 | banana
3 | apple
4 | mango

{{% notice note %}}

As you see in this example, lists can have duplicate elements.

{{% /notice %}}

In python, lists do not have to all be of the same data type, so a single list can contain a combination of strings and numbers.

```python
#lists can also have different datatypes
my_list = ['candy', 10, 2.5]
```

### Length of the list

You can get the length of the list by using `len(list)` function and the list name is passed as the parameter.

```python
length = len(fruits)  ##length = 5
```

### Append an element in the list

You can add items to a list by using the `append` function, `list.append(x)` function where `list` is the name of the list and `x` is the element that you want to append. It adds the element at the end of the list.

```python
#Before the list is ['orange', 'apple', 'banana', 'apple', 'mango']
fruits.append('lemon')
#Now the list is ['orange', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Insert an element at a specific index

If you want to control where you place a new element, you can insert an element at specific index of a list by using the `list.insert(i, x)` function. Here `list` is the name of the list, `i` is the index where you want to insert and `x` is the element that you want insert. Note: this will shift all of the elements starting at position `i` over one index.


```python
fruits.insert(1, 'guava')
#Now the list is ['orange', 'guava', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Remove an element from the list

`list.remove(x)` function searches for the first instance of the given element `x` and removes it from the list.

```python
fruits.remove('apple')
#Now the list is ['orange', 'guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

`list.remove(x)` throws a value error if the element `x` is not present in the list.

Also, notice that the second instance of `'apple'` is still in the list.

{{% /notice %}}


### Remove an element at specific position

`list.pop(i)` function removes the element at the index `i`.

```python
fruits.pop(0)
#Now the list is ['guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

If you don't specify the index,`list.pop()` then it removes the last element from the list.

{{% /notice %}}


### Reverse the elements of the list

`list.reverse()` function reverse the elements of the list.

```python
fruits.reverse()
#Now the list is ['lemon', 'mango', 'apple', 'banana', 'guava']
```

### Get the minimum and maximum element of the list

`min(list)` function returns the minimum element of the list and the maximum element can be found by using the `max(list)` function. If your list is a list of numbers, it will return the lowest or highest value number of the list. If your list is a list of strings, it will return the first or last value alphabetically.

```python

my_list = [4, 1, 2, 5, 3]  ## Defining a new list of Integers

print(min(my_list)) ## prints 1, the minimum element of my_list
print(max(my_list)) ## prints 5, the maximum element of my_list

```
{{% notice note %}}

If your list is a mix of strings and numbers, the `min` and `max` functions will return an error.

{{% /notice %}}

### Challange

Now let's try this yourself. Start with the list of fruits below. Print out the list of fruits and for each fruit, as the user if they like it. If they like it, keep it. If they do not, remove it from the list. Next, ask the user to add a fruit that is missing from the list. Add it to the list and print out the number of fruits the user likes.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Hint: You will need to convert the `length` integer to a string using the `str(int)` function.