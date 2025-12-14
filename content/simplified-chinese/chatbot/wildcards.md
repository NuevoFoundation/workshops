---
title: "通配符"
draft: false
weight: 8
---

## 通配符
您可能现在已经注意到，要为用户提出问题的各种可能方式编写一个类别需要花费很多精力。例如，目前机器人会用“Hello, world”来回应“Hello”。但如果用户说“Hello there”或“Hello chatbot”呢？我们将不得不为每一个这样的情况编写一个新类别。幸运的是，有其他工具可以用来让我们的机器人更加灵活。  
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />  
其中一个工具是**通配符**。通配符是一种特殊字符，可以匹配任何单词或短语。让我们来看看它是如何工作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

```*```符号能够捕获用户输入中的1个或多个单词。有了这个新的类别，聊天机器人现在会对任何以“Hello”开头并且后续带有任意单词的输入回答“Hi!”。因此，模式“HELLO *”将匹配“HELLO THERE”、“HELLO CHATBOT”、“HELLO WORLD”、“HELLO EVERYONE”，等等。