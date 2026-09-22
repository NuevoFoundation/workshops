---
title: "方法 (Methods)"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

方法代表我們希望對陣列執行的一些操作。它們可用於改變陣列的行為或對自身執行某些操作。

為了使事情變得更簡單，陣列提供了許多方法。讓我們來看看一些基本方法，它們可以讓你了解這些東西的樣子。

{{% notice note %}}

#### 和屬性有什麼不同？

**屬性**基本上是陣列所擁有的資訊。而 **方法** 是陣列可以執行的操作。

{{% /notice %}}

## Concat()

連接兩個或更多的陣列，並返回一個新的陣列。

**語法:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**範例:**
![#找不到圖片](../../img/concat.png)

## Push()
向陣列的末尾新增一個或多個元素，並返回新增後陣列的長度。

**語法:**
```javascript
var value = arrayName.push(newElement);
```

**範例:**
![#找不到圖片](../../img/push.png)

## Pop()
移除陣列的最後一個元素，並返回該元素。

**語法:**
```javascript
var value = arrayName.pop();
```

<b>範例:</b>
![#找不到圖片](../../img/pop.png)

## Shift()

移除陣列的第一個元素，並返回該元素。

**語法:**
```javascript
var value = arrayName.shift();
```

**範例:**
![#找不到圖片](../../img/shift.png)

# Unshift()

向陣列的開頭新增一個或多個元素，並返回新增後陣列的長度。

**語法:**
```javascript
var value = arrayName.unshift(newElement);
```

**範例:**
![#找不到圖片](../../img/unshift.png)

## Sort()

就地對陣列的元素進行排序，並返回陣列的參考。

**語法:**
```javascript
var value = arrayName.sort();
```

**範例:**
![#找不到圖片](../../img/sort.png)

# Reverse()

調換陣列中的元素，就地進行：第一個陣列元素變為最後一個，而最後一個變為第一個。它返回陣列的參考。

**語法:**
```javascript
var value = arrayName.reverse();
```

**範例:**
![#找不到圖片](../../img/reverse.png)