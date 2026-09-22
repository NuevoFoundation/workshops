```yaml
---
title: "数字"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 8
---
计算机也可以像您在学校里学到的一样进行常规数学运算。使用 `System.out.println` 来打印出数学表达式的结果。

```kotlin
System.out.println(5 + 4);
System.out.println(6 * (9 - 7) / 3);
```

以下是您可以使用的数学符号完整列表：

<table class="table">
            <tr>
                <td><code class="language-cs">+</code></td>
                <td>加法</td>
                <td><code class="language-cs">\</code></td>
                <td>除法</td>
            </tr>
            <tr>
                <td><code class="language-cs">-</code></td>
                <td>减法</td>
                <td><code class="language-cs">%</code></td>
                <td>取模（余数）</td>
            </tr>
            <tr>
                <td><code class="language-cs">*</code></td>
                <td>乘法</td>
                <td><code class="language-cs">(</code>,<code class="language-cs">)</code></td>
                <td>括号</td>
            </tr>
        </table>

**_趣闻：计算机的除法_**

计算机的除法与普通计算器的除法不同。计算机除法会忽略余数或小数。例如，15 / 4 的结果是 3，而不是 3.75。

{{% notice tip %}}
## 一起练习

尝试将以下结果打印在控制台中。确保括号是匹配的。使用计算器（或心算）来验证计算机生成的答案是否正确。

- 2 - 19
- (3 + 5) \* 6
- (13 + 5 \* 8) / (6 - (3 + 7))
- 3 % 2

{{% /notice %}}
```