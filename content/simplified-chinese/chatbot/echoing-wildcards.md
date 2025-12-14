---  
title: "回显通配符"  
draft: false  
weight: 9  
---  

## 介绍 ```<star />``` 标签  
让我们学习另一个工具，来使我们的聊天机器人具有更有趣的回应。在上一课中，我们学到如何使用通配符 ```*``` 来匹配任何单词或短语。但是如果我们希望在响应中使用用户输入的单词或短语该怎么办呢？例如，如果用户告诉我们他们最喜欢的颜色，我们希望机器人的回应中包含用户喜欢的颜色。我们可以使用 ```<star />``` 标签来实现这个功能。

```<star />``` 标签是一个特殊的标签，它允许我们在响应中引用用户输入的单词或短语。让我们来看一下它是如何工作的。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

让我们逐步解析这个类别是如何运作的。模式“MY FAVORITE COLOR IS *”将匹配任何以“MY FAVORITE COLOR IS”开头，并随后跟随任何单词或短语的输入。因此，这个模式可以匹配“MY FAVORITE COLOR IS BLUE”、“MY FAVORITE COLOR IS RED”以及“MY FAVORITE COLOR IS GREEN”等等。```<star />``` 标签会捕获用户输入的单词或短语，并在响应中替换。当用户输入“MY FAVORITE COLOR IS BLUE”时，“blue”就是通配符所代表的单词，因此当聊天机器人回应时，```<star />``` 会被替换成“blue”。机器人将响应“Your favorite color is blue”。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下是该类别的一些输入和输出示例：

输入 | 输出  
---|--------------  
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.  
MY FAVORITE COLOR IS RED | Your favorite color is red.  
MY FAVORITE COLOR IS GREEN | Your favorite color is green.  