---
title: "分類"
draft: false
weight: 6
---

## AIML 基礎
AIML 的基本單元是 **分類**。一個分類由模式和模板組成。**模式**是使用者對機器人說的話，**模板**是機器人給使用者的回應。

從以下範例中可以看到，模式是 "HELLO"，模板是 "Hello, World!"。當使用者說 "HELLO" 時，機器人將回應 "Hello, World!"。注意，模式匹配對大小寫不敏感，所以機器人對 "hello"、"HELLO"、"Hello" 和 "HeLlo" 的回應都相同。
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

在撰寫模式時，我們建議使用全大寫字母，並避免使用標點符號。例如，如果你想匹配 "What is your name?"，你應該將模式寫為 "WHAT IS YOUR NAME"。Pandora 在匹配模式之前，會移除使用者輸入中的任何標點符號。

{{% /notice %}}