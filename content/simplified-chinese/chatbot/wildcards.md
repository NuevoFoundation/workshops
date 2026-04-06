---
title: "通配符"
draft: false
weight: 8
---

## 通配符
您可能已经注意到，为每种可能的用户提问方式分别创建一个类别是一项非常繁琐的工作。例如，目前机器人会对“Hello”回复“Hello, world”。但是如果用户说“Hello there”或“Hello chatbot”呢？我们需要为每一种情况写一个新的类别。幸运的是，还有一些额外的工具可以帮助我们让机器人更加灵活。
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
其中一个工具是 **通配符**。通配符是一种特殊字符，可以匹配任何单词或短语。让我们看看它是如何工作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

```*``` 符号能够捕获用户输入中的一个或多个单词。使用这个新的类别，聊天机器人现在会对任何以 “Hello” 开头并后面跟着任意单词的输入回复“Hi!”。因此模式“HELLO *”会匹配“HELLO THERE”、“HELLO CHATBOT”、“HELLO WORLD”、“HELLO EVERYONE”等等。