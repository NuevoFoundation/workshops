```markdown
---
title: "方法"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

方法表示我们希望对数组执行的一些操作。它们可以用来改变行为或对数组本身执行某些操作。

为了简化操作，数组提供了很多方法。让我们来了解一些基本方法，这将使你对它们的样子有个概念。

{{% notice note %}}

#### 与属性有何不同？

**属性**基本上是数组拥有的信息。**方法**是数组可以执行的操作。

{{% /notice %}}

## Concat()

连接两个或多个数组，并返回一个新数组。

**语法:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**示例:**
![#无法找到图片](../../img/concat.png)

## Push()
将一个或多个元素添加到数组的末尾，并返回数组的结果长度。

**语法:**
```javascript
var value = arrayName.push(newElement);
```

**示例:**
![#无法找到图片](../../img/push.png)

## Pop()
从数组中移除最后一个元素，并返回该元素。

**语法:**
```javascript
var value = arrayName.pop();
```

<b>示例:</b>
![#无法找到图片](../../img/pop.png)

## Shift()

从数组中移除第一个元素，并返回该元素。

**语法:**
```javascript
var value = arrayName.shift();
```

**示例:**
![#无法找到图片](../../img/shift.png)

# Unshift()

将一个或多个元素添加到数组的开头，并返回新数组的长度。

**语法:**
```javascript
var value = arrayName.unshift(newElement);
```

**示例:**
![#无法找到图片](../../img/unshift.png)

## Sort()

就地对数组元素进行排序，并返回数组的引用。

**语法:**
```javascript
var value = arrayName.sort();
```

**示例:**
![#无法找到图片](../../img/sort.png)

# Reverse()

就地翻转数组的元素：第一个数组元素变为最后一个，最后一个变为第一个。它返回数组的引用。

**语法:**
```javascript
var value = arrayName.reverse();
```

**示例:**
![#无法找到图片](../../img/reverse.png)
```