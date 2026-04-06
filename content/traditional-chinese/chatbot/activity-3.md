```markdown
---
title: "Activity 3: 新增自訂分類"
draft: false
weight: 7
---

## 新增更多分類

目前，我們的機器人只能回應「Hello」。讓我們新增一些分類，讓機器人能回應更多內容。

1. 如果使用者說「What is your name?」，機器人應回應「My name is Chatbot」。
2. 如果使用者說「What is your favorite color?」，機器人應回應「My favorite color is blue」。
3. 如果使用者說「What is your favorite food?」，機器人應回應「My favorite food is pizza」。

<img src="../img/ideas.png" alt="" width="30%" style="" />

提醒一下，以下是基本的分類結構：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

提醒：在撰寫 pattern 時，請使用全大寫並避免使用標點符號。因此，如果您想要匹配「What is your name?」，應將 pattern 撰寫為「WHAT IS YOUR NAME」。

{{% /notice %}}

{{% notice tip %}}

提醒：每次修改分類後並希望與聊天機器人交互時，記得儲存檔案。

{{% /notice %}}

嘗試將這些分類新增到您的機器人中，並使用聊天工具測試。此時，機器人應該能回應「Hello」、「What is your name?」、「What is your favorite color?」和「What is your favorite food?」。
```