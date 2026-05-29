---
title: "Activity 3: Add your own categories"
draft: false
weight: 7
---

## 增加更多分類

目前，我們的聊天機器人只能回應「Hello」。讓我們添加更多分類，讓聊天機器人能回應更多問題。

1. 如果使用者說「What is your name?」，聊天機器人應該回應「My name is Chatbot」。
2. 如果使用者說「What is your favorite color?」，聊天機器人應該回應「My favorite color is blue」。
3. 如果使用者說「What is your favorite food?」，聊天機器人應該回應「My favorite food is pizza」。

<img src="../img/ideas.png" alt="" width="30%" style="" />

提醒一下，這是分類的基本結構：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

提醒：當撰寫 `pattern` 時，請使用全大寫並避免使用標點符號。因此，如果你想匹配「What is your name?」，你應該將 `pattern` 寫為「WHAT IS YOUR NAME」。

{{% /notice %}}

{{% notice tip %}}

記住：每次修改分類後，如果想與聊天機器人互動，要記得儲存檔案。

{{% /notice %}}

試著將這些分類新增到你的聊天機器人並透過聊天小工具進行測試。此時，聊天機器人應該能回應「Hello」、「What is your name?」、「What is your favorite color?」和「What is your favorite food?」。