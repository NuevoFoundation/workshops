---
title: "遍歷陣列"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---

其中一個常見的陣列操作是遍歷陣列中的值，並以某種方式處理每一個值。讓我們一起探討幾種最簡單的方式：

## Array.forEach()
`forEach()` 方法會將一個函數（回呼函數，在此例中為名為 printBr 的函數）調用一次，用於陣列中的每一個元素。

傳遞給 `forEach` 的函數會針對陣列中的每個項目執行一次，並且將陣列中的項目作為該函數的參數。未賦值的元素在 forEach 循環中不會被迭代。

**語法：**
```javascript
arrayName.forEach(functionName);
```

<b>範例：</b>
![#Can't find image](../../img/foreach.png)