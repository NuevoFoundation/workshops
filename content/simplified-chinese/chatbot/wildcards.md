---
title: "通配符"
draft: false
weight: 8
---

## 通配符
你可能已经注意到，为用户可能提出的每一种提问方式编写一个类别需要大量工作。例如，目前机器人会对“Hello”的输入回复“Hello, world”。但如果用户说“Hello there”或“Hello chatbot”呢？我们就需要为这些情况编写新的类别。幸运的是，我们可以使用额外的工具让我们的机器人更加灵活。
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
这些工具之一就是**通配符**。通配符是一个可以匹配任意单词或短语的特殊字符。让我们来看看它是如何工作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

符号```*```能够捕获用户输入中的一个或多个单词。通过这个新的类别，聊天机器人现在将对以“Hello”开头并后跟任何单词的输入回复“Hi!”。因此，模式"HELLO *"可以匹配“HELLO THERE”、“HELLO CHATBOT”、“HELLO WORLD”和“HELLO EVERYONE”等等。