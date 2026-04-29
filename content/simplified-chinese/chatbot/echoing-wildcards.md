```yaml
---
title: "回显通配符"
draft: false
weight: 9
---

## 介绍 ```<star />``` 标签
让我们学习一种新工具，帮助我们的聊天机器人生成更有趣的回复。在上一课中，我们学习了如何使用通配符 ```*``` 来匹配任何单词或短语。但如果我们希望在机器人的回复中使用用户输入的词或短语怎么办？例如，如果用户告诉我们他们最喜欢的颜色，我们希望机器人的回复能包含用户喜欢的颜色。我们可以通过使用 ```<star />``` 标签来实现这一点。

```<star />``` 标签是一个特殊标签，它可以在我们的回复中使用用户输入的词或短语。让我们看看它是如何工作的。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

让我们逐步解析这个类别是如何工作的。模式 "MY FAVORITE COLOR IS *" 会匹配任何以 "MY FAVORITE COLOR IS" 开头后跟随任何单词或短语的输入。因此，该模式将匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED" 和 "MY FAVORITE COLOR IS GREEN" 等等。而 ```<star />``` 标签会捕获用户输入的词或短语，并在回复中使用它。因此如果用户输入 "MY FAVORITE COLOR IS BLUE"，"blue" 是通配符所表示的单词，当聊天机器人回复时，```<star />``` 将被替换为 "blue"。机器人将回复 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下是该类别的一些输入输出示例：

输入 | 输出 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```