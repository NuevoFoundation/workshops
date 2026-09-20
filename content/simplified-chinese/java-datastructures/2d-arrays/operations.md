```markdown
---
title: "Operations"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

二维数组的工作方式与普通数组非常相似，许多我们对数组使用的概念或方法同样适用于多维数组。作为快速回顾，以下是如何初始化二维数组和访问元素的方式：

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // 输出 1
```

唯一可能一开始不太容易理解的部分是迭代二维数组，但这也非常简单。与单个 `for` 循环不同，我们将使用两个 `for` 循环。以下是一个简单的示例，帮助您了解：

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // 遍历二维数组
    for (int i = 0; i < arr.length; i++) {

        // 遍历二维数组中的单个数组
        for (int j = 0; j < arr[i].length; j++) {

            // 访问单个值
            arr[i][j] = num;
            num++;
        }
    }
} 
```

如您所见，我们创建了一个名为 `arr` 的空数组。在其中，我们有 `10` 个数组，每个数组分别有 `20` 个元素。为了遍历所有的数组，我们使用一个标准的 `for` 循环，就像我们对普通数组的操作方式一样。然而，唯一的区别是我们现在需要创建第二个 `for` 循环，用于遍历第 `i` 个数组。在这个示例中，我们简单地将 `arr[i][j]` 设置为 `num` 然后 `num++`。
```