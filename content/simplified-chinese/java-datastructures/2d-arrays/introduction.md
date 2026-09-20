```markdown
---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/DZkUUk64mWM" title="Introduction - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 什么是二维数组？

我们已经学习了很多关于数组的知识。我们知道数组可以存储许多不同类型的数据（整数、字符串、双精度数等），那么一个数组能否存储其他数组呢?

![image](../img/2darray.png)

一个二维数组的类型可以是 `int[][]` 或 `String[][]`，带有两组方括号。二维数组的元素以行和列的形式排列，并且二维数组的 `new` 操作符需要同时指定行数和列数。例如：

```js javascript
int[][] A;
A = new int[3][4];
```

这创建了一个二维数组 `int`，它包含 12 个元素，排列为 3 行 4 列。二维数组也有初始值设定项。例如，下面的语句创建了一个 3 行 4 列的数组，该数组在下图中展示：

```js javascript
int[][] A = {    
                {  1,  0, 12, -1 },
                {  7, -3,  2,  5 },
                { -5, -2,  2, -9 }
            };
```

二维数组的初始值设定项包含数组 `A` 的各行，这些行之间用逗号分隔，并用括号包裹起来。每一行是一个值的列表，这些值之间用逗号分隔，并用括号包裹起来。类似格式的二维数组字面量可以在任意地方使用，不局限于声明语句。例如：

```js javascript
A = new int[][] { 
                    {  1,  0, 12, -1 },
                    {  7, -3,  2,  5 },
                    { -5, -2,  2, -9 }
                };
```
                  
所有这些也可以自然扩展到三维、四维甚至更高维的数组。
```