```markdown
---
title: "分类"
draft: false
weight: 6
---

## AIML 基础
AIML 的基本单位是**分类**（category）。一个分类由一个模式（pattern）和一个模板（template）组成。**模式**是用户对机器人说的话，而**模板**是机器人对用户的回复。

看下面的例子，我们可以看到模式是 "HELLO"，而模板是 "Hello, World!"。当用户说 "HELLO" 时，机器人会用 "Hello, World!" 来响应。注意，模式匹配是大小写不敏感的，因此机器人会以同样的方式响应 "hello"、"HELLO"、"Hello" 和 "HeLlo"。
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

在编写模式时，我们建议使用全大写，并避免使用标点符号。因此，如果您想匹配 "What is your name?"，您应该将模式写为 "WHAT IS YOUR NAME"。Pandora 在进行模式匹配之前会移除用户输入中的所有标点符号。

{{% /notice %}}
```