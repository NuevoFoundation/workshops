---
title: "Categories"
draft: false
weight: 6
---

## AIML 基礎
AIML 的基本單位是 **類別 (category)**。類別由一個模式 (pattern) 和一個模板 (template) 組成。**模式**是使用者對機器人說的話，而**模板**是機器人回應使用者的內容。

從以下範例可以看到，模式是 "HELLO"，而模板是 "Hello, World!"。當使用者說 "HELLO" 時，機器人將回應 "Hello, World!"。需要注意的是，模式匹配對大小寫不敏感，所以機器人會以相同的方式回應 "hello"、"HELLO"、"Hello" 和 "HeLlo"。
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

在書寫模式時，我們建議使用全大寫字母，並避免使用標點符號。因此，如果希望匹配 "What is your name?"，應將模式寫為 "WHAT IS YOUR NAME"。Pandora 在匹配模式之前會自動移除使用者輸入中的任何標點符號。

{{% /notice %}}