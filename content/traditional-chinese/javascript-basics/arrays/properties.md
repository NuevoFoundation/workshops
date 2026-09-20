---
title: "屬性"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

陣列的屬性或特徵用來描述陣列的屬性。例如：元素的總數、特定索引處的值等等...

以下是 Array 物件的屬性列表以及它們的描述。

## Constructor()

返回創建該物件的陣列函數的引用。

**語法:**
```javascript
arrayName.constructor;
```

**範例:**
![#無法找到圖片](../../img/constructor.png)

## Index()

此屬性表示匹配的字串在陣列中的零基索引。Index 提供了一種基於陣列中位置來存取或修改元素的方式。

### 根據索引存取陣列元素：

**語法:**
```javascript
var value = arrayName[index];
```

**範例:**
![#無法找到圖片](../../img/indexaccess.png)

### 根據索引修改陣列元素：

**語法:**
```javascript
arrayName[index] = newValue;
```

**範例:**
![#無法找到圖片](../../img/indexmodify.png)

## Length() 
反映陣列中的元素數量。

**語法:**
```javascript
var length = arrayName.length;
```

**範例:**
![#無法找到圖片](../../img/length.png)