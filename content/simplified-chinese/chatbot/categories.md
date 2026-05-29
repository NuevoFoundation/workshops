---
title: "Categories"
draft: false
weight: 6
---

## AIML 基础知识
AIML 的基本单位是 **类别**。一个类别由模式和模板组成。**模式**是用户对机器人说的话，**模板**是机器人对用户的回应。

通过以下示例，我们可以看到模式是 "HELLO"，模板是 "Hello, World!"。当用户说 "HELLO" 时，机器人会回应 "Hello, World!"。注意，模式匹配是不区分大小写的，所以机器人会以同样的方式回应 "hello"、"HELLO"、"Hello" 和 "HeLlo"。

<img src="../img/chat_persons_robot.png" alt="" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

撰写模式时，我们建议使用全大写并避免使用标点符号。例如，如果您希望匹配 "What is your name?"，模式应写为 "WHAT IS YOUR NAME"。Pandora 会在匹配模式之前删除用户输入中的任何标点符号。

{{% /notice %}}
