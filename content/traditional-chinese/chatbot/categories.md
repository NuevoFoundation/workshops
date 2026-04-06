```yaml
---
title: "Categories"
draft: false
weight: 6
---
```

## AIML 基礎
AIML 的基本單元是 **分類**。一個分類包含一個模式和一個模板。**模式** 是使用者對機器人說的內容，而 **模板** 是機器人對使用者的回應。

從以下範例可以看出，模式是 "HELLO"，模板是 "Hello, World!"。當使用者說 "HELLO" 時，機器人會回應 "Hello, World!"。注意，模式匹配是不區分大小寫的，因此機器人對 "hello"、"HELLO"、"Hello" 和 "HeLlo" 的回應都會相同。
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

在撰寫模式時，建議全部使用大寫並避免使用標點符號。因此，如果你想匹配 "What is your name?"，應該將模式寫為 "WHAT IS YOUR NAME"。Pandora 會在匹配模式之前移除使用者輸入中的所有標點符號。

{{% /notice %}}