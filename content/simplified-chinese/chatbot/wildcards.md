---
title: "Wildcards"
draft: false
weight: 8
---

## 通配符
你可能现在已经注意到，为用户可能提问的每种情况编写一个分类需要耗费不少精力。例如，目前机器人会用“Hello, world”来回应“Hello”。但如果用户说的是“Hello there”或者“Hello chatbot”呢？我们不得不为每种情况编写一个新的分类。幸运的是，我们有一些额外的工具可以让我们的机器人更加灵活。  
<img src="../img/party.png" alt="展示庆祝新聊天机器人功能的角色插图" width="25%" style="display: block; margin-left: 0;" />  
其中一个工具就是**通配符**。通配符是一种特殊字符，可以匹配任意单词或短语。让我们来看看它是如何工作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

符号```*```能够捕获用户输入中一个或多个单词。通过这个新的分类，无论用户输入中是否有“Hello”后跟任意单词，聊天机器人现在都会回应“Hi!”。例如，模式“HELLO *”将匹配“HELLO THERE”、“HELLO CHATBOT”、“HELLO WORLD”和“HELLO EVERYONE”等内容。