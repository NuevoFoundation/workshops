---
title: "Categories"
draft: false
weight: 6
---

## AIML 基础知识
AIML 的基本单位是 **category（类别）**。一个类别由一个模式（pattern）和一个模板（template）组成。**模式** 是用户对机器人说的话，而 **模板** 是机器人对用户的回复。

看看以下示例，我们可以看到模式是 "HELLO"，模板是 "Hello, World!"。当用户说 "HELLO" 时，机器人会回复 "Hello, World!"。请注意，模式匹配对大小写不敏感，因此机器人会对 "hello"、"HELLO"、"Hello" 和 "HeLlo" 做出相同的响应。
<img src="../img/chat_persons_robot.png" alt="人与聊天机器人交流的插图" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

在编写模式时，我们建议全部使用大写字母，并避免使用标点符号。因此，如果你想匹配 "What is your name?"，模式应该写成 "WHAT IS YOUR NAME"。Pandora 会在匹配模式之前删除用户输入中的所有标点符号。

{{% /notice %}}