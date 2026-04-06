```yaml
---
title: "回显通配符"
draft: false
weight: 9
---

## 介绍 ```<star />``` 标签
让我们再学习一种工具，使我们的聊天机器人能够给出更有趣的回复。在上一课中，我们学习了如何使用通配符 ```*``` 来匹配任意单词或短语。但如果我们希望在回复中使用用户输入的单词或短语呢？例如，如果用户告诉我们他们最喜欢的颜色，我们希望机器人的回复中包含用户最喜欢的颜色。我们可以通过 ```<star />``` 标签来实现。

```<star />``` 是一个特殊标签，可以让我们在回复中使用用户输入的单词或短语。让我们看一下它是如何工作的。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

让我们逐步解析这个类别的工作原理。模式 "MY FAVORITE COLOR IS *" 将匹配任何以 "MY FAVORITE COLOR IS" 开头，并且后面有任意单词或短语的输入。因此，这个模式将匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED"、"MY FAVORITE COLOR IS GREEN" 等等。 ```<star />``` 标签会捕捉用户输入的单词或短语，并在回复中使用它。因此，如果用户输入的是 "MY FAVORITE COLOR IS BLUE"，那么代表通配符的 "blue" 会在聊天机器人回复时用来替换 ```<star />```。机器人将回复 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下是这个类别中一些输入和输出的更多示例：

输入 | 输出  
---|--------------  
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.  
MY FAVORITE COLOR IS RED | Your favorite color is red.  
MY FAVORITE COLOR IS GREEN | Your favorite color is green.  
```