```markdown
---
title: "分类"
draft: false
weight: 6
---

## AIML 基础
AIML 的基本单元是 **分类**。一个分类由一个模式和一个模板组成。**模式**是用户对机器人说的话，而**模板**是机器人对用户的回复。

通过以下示例可以看到，模式是“HELLO”，模板是“Hello, World!”。当用户说“HELLO”时，机器人会回复“Hello, World!”。注意模式匹配是大小写不敏感的，所以机器人会以相同方式回应“hello”、“HELLO”、“Hello”和“HeLlo”。
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

在编写模式时，我们建议全部使用大写字母，并避免使用标点符号。因此，如果您想匹配“What's your name?”，您应该将模式写为“WHAT IS YOUR NAME”。Pandora 会在匹配模式之前自动移除用户输入中的所有标点符号。

{{% /notice %}}
```