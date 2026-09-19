```yaml
---
title: "通配符回显"
draft: false
weight: 9
---

## 介绍 ```<star />``` 标签
让我们学习一个新工具，以使我们的聊天机器人能够生成更有趣的响应。在上一课中我们学习了如何使用通配符 ```*``` 来匹配任意单词或短语。但如果我们想在响应中使用用户输入的单词或短语怎么办？例如，如果用户告诉我们他们最喜欢的颜色，那么机器人响应中应该包含用户最喜欢的颜色。这时，我们可以用 ```<star />``` 标签来实现。

```<star />``` 标签是一种特殊标签，它允许我们在响应中使用用户输入的单词或短语。让我们看看它如何工作。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

现在让我们逐步了解这个 category 的工作原理。模式 "MY FAVORITE COLOR IS *" 将匹配任何以 "MY FAVORITE COLOR IS" 开头，随后跟任意单词或短语的输入。因此，这个模式可以匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED"、"MY FAVORITE COLOR IS GREEN" 等等。```<star />``` 标签会捕获用户输入的单词或短语，并在响应中使用它。例如，如果用户输入 "MY FAVORITE COLOR IS BLUE"，"blue" 就是被通配符表示的单词，因此当聊天机器人响应时，```<star />``` 会被替换为 "blue"。机器人将响应："Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="展示聊天机器人如何匹配句子模式以及响应的示意图" width="27%" />

以下是这个 category 的一些输入和输出示例：

输入 | 输出 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```