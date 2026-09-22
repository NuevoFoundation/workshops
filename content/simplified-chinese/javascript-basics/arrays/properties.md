---
title: "Properties"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

数组的属性或特性是描述数组属性的一种方式。例如：元素的总数、特定索引位置的值等…

以下是数组对象的属性列表及其描述。

## Constructor()

返回一个引用，指向创建此对象的数组函数。

**语法:**
```javascript
arrayName.constructor;
```

**示例:**
![#无法找到图片](../../img/constructor.png)

## Index()

此属性表示字符串中零基索引的匹配位置。索引提供了一种基于数组中位置访问或修改元素的方法。

### 通过索引访问数组元素：

**语法:**
```javascript
var value = arrayName[index];
```

**示例:**
![#无法找到图片](../../img/indexaccess.png)

### 通过索引修改数组元素：

**语法:**
```javascript
arrayName[index] = newValue;
```

**示例:**
![#无法找到图片](../../img/indexmodify.png)

## Length() 

反映数组中的元素数量。

**语法:**
```javascript
var length = arrayName.length;
```

**示例:**
![#无法找到图片](../../img/length.png)