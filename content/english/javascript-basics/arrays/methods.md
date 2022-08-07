---
title: "Methods"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Methods represent some action we wish to perform on the array. They can be used to change the behaviour or perform some operations on itself.

To make things easier, arrays provide a lot of methods. Let's go over some of the basic ones which would give you an idea of they look like.

{{% notice note %}}

#### How is it different compared to properties ?

**Properties** are basically information that an array has. **Methods** are what an array can do.

{{% /notice %}}

## Concat()

Joins two or more arrays and returns a new array.

**Syntax:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Example:**
![#Can't find image](../../img/concat.png)

## Push()
Adds one or more elements to the end of an array and returns the resulting length of the array.

**Syntax:**
```javascript
var value = arrayName.push(newElement);
```

**Example:**
![#Can't find image](../../img/push.png)

## Pop()
Removes the last element from an array and returns that element.

**Syntax:**
```javascript
var value = arrayName.pop();
```

<b>Example:</b>
![#Can't find image](../../img/pop.png)

## Shift()

Removes the first element from an array and returns that element.

**Syntax:**
```javascript
var value = arrayName.shift();
```

**Example:**
![#Can't find image](../../img/shift.png)

# Unshift()

Adds one or more elements to the front of an array and returns the new length of the array.

**Syntax:**
```javascript
var value = arrayName.unshift(newElement);
```

**Example:**
![#Can't find image](../../img/unshift.png)

## Sort()

Sorts the elements of an array in place, and returns a reference to the array.

**Syntax:**
```javascript
var value = arrayName.sort();
```

**Example:**
![#Can't find image](../../img/sort.png)

# Reverse()

Transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.

**Syntax:**
```javascript
var value = arrayName.reverse();
```

**Example:**
![#Can't find image](../../img/reverse.png)
