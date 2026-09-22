```yaml
---
title: "Categories"
draft: false
weight: 6
---
```

## AIML 基本原理
AIML 的基本單位是 **category**（分類）。一個分類包含一個 pattern（模式）和一個 template（模板）。**Pattern** 是使用者對機器人說的內容，**Template** 是機器人對使用者的回應。

看以下範例，我們可以看到 pattern 是 "HELLO"，而 template 是 "Hello, World!"。當使用者說 "HELLO" 時，機器人將回應 "Hello, World!"。注意，模式匹配是不分大小寫的，因此機器人對 "hello"、"HELLO"、"Hello" 和 "HeLlo" 的回應都是一樣的。
<img src="../img/chat_persons_robot.png" alt="描述人與聊天機器人溝通的插畫" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

在撰寫模式時，我們建議使用全大寫，並避免使用標點符號。因此，如果您希望匹配 "What is your name?"，您應該將模式寫為 "WHAT IS YOUR NAME"。Pandora 在進行模式匹配前，會自動移除使用者輸入的所有標點符號。

{{% /notice %}}