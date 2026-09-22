```markdown
---
title: "方法"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## 栈

栈与队列类似。唯一的区别是方法名称以及我们获取元素的方式。

在创建栈之前，我们需要 `import` `stack` 类。为了简化操作，我们可以使用 `*` 导入库中的所有类。操作看起来像这样：

```js javascript
// 这将导入 stack 和其他类
import java.util.*;
```

栈有多种方法可以使用。如果感兴趣，你可以在网上搜索更多关于这些方法的信息。但是，目前我们只解释一些最重要的方法：`push()`、`peek()` 和 `pop()`。

<hr>

## 创建栈

```js javascript
Stack driver = new Stack();
```

<hr>

## 添加元素

为了向栈中添加元素，我们可以使用 `push()` 方法。`push()` 操作将元素放在栈的顶部。

```js javascript
push(1);
push(2);
push(3);

// 创建一个栈，元素为 [3, 2, 1]
```

<hr>

## 访问元素

要检索或获取栈中的第一个元素或栈顶部的元素，我们可以使用 `peek()` 方法。检索的元素不会被从栈中删除或移除。

```js javascript
stack.peek();

// 返回 3
// 栈包含 [3, 2, 1]
```

<hr>

## 移除元素

要从栈中移除元素，我们可以使用 `pop()` 方法。这个方法会弹出并移除栈顶部的元素。

```js javascript
stack.pop();

// 返回 3
// 栈包含 [2, 1]
```

<hr>

通过以上三个方法，让我们来看一个示例。

```js javascript
import java.util.*;
public class Driver {
    public static void main(String []args) {
        // 栈的默认初始化
        Stack stack = new Stack(); 
  
        // 向栈中压入元素 
        stack.push("Burger King"); 
        stack.push("Subway"); 
        stack.push("Jack in the Box"); 
  
        // 打印栈元素 
        System.out.println(stack); 
    }
}
```

输出：

```js javascript
["Jack in the Box", "Subway", "Burger King"]
```
```