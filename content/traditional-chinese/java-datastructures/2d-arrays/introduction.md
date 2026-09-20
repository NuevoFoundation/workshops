---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" title="Introduction - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什麼是二維陣列？

我們已經學習了許多有關陣列的知識。我們知道陣列可以存放多種不同的型別（整數、字串、浮點數等），但陣列是否能存放其他陣列呢？

![image](../img/2darray.png)

二維陣列的型別例如 `int[][]` 或 `String[][]`，有兩組方括號。二維陣列的元素以行和列的形式排列，建立二維陣列時需要指定行數和列數。例如：

```js javascript
int[][] A;
A = new int[3][4];
```

這會建立一個 `int` 型的二維陣列，包含 12 個元素，分佈於 3 行 4 列。此外，我們也可以使用初始化器來建立二維陣列。例如，以下語句建立了一個 3 行 4 列的陣列，如下圖所示：

```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

二維陣列的初始化器包含陣列的行，每行之間用逗號分隔並用大括號括起來。每一行元素也是用逗號分隔並用大括號括起來。此外，二維陣列的文字也具有類似語法，可以應用於任何地方，而不僅僅是用於宣告。例如：

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```

所有這些概念都可以自然地擴展到三維、四維，甚至更高維度的陣列使用。