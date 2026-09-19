---
title: "數字"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 8
---
電腦也可以進行學校裡常見的數學運算。使用 `System.out.println` 來打印數學表達式的結果。

```kotlin
System.out.println(5 + 4);
System.out.println(6 * (9 - 7) / 3);
```

以下是您可以使用的數學符號完整列表：

<table class="table">
            <tr>
                <td><code class="language-cs">+</code></td>
                <td>加法</td>
                <td><code class="language-cs">\</code></td>
                <td>除法</td>
            </tr>
            <tr>
                <td><code class="language-cs">-</code></td>
                <td>減法</td>
                <td><code class="language-cs">%</code></td>
                <td>模數 (餘數)</td>
            </tr>
            <tr>
                <td><code class="language-cs">*</code></td>
                <td>乘法</td>
                <td><code class="language-cs">(</code>,<code class="language-cs">)</code></td>
                <td>括號</td>
            </tr>
        </table>

**_趣味小知識：電腦除法_**

電腦的除法與一般計算器的除法有所不同。電腦的除法會忽略餘數或小數。例如，15 / 4 的結果是 3，而不是 3.75。

{{% notice tip %}}
## 一起練習

試著將下列運算的答案打印到控制台中。確保括號是匹配的。可以使用計算器 (或心算) 來檢查電腦是否產生了正確的答案。

- 2 - 19
- (3 + 5) \* 6
- (13 + 5 \* 8) / (6 - (3 + 7))
- 3 % 2

{{% /notice %}}