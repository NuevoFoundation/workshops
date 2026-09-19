---
title: "活動 3：新增您的分類"
draft: false
weight: 7
---

## 新增更多分類

目前，我們的機器人只能回應 "Hello"（你好）。讓我們新增更多分類，讓機器人能回應更多內容。

1. 如果使用者說 "What is your name?"（你的名字是什麼？），機器人應回應 "My name is Chatbot"（我的名字是 Chatbot）。
2. 如果使用者說 "What is your favorite color?"（你最喜歡的顏色是什麼？），機器人應回應 "My favorite color is blue"（我最喜歡的顏色是藍色）。
3. 如果使用者說 "What is your favorite food?"（你最喜歡的食物是什麼？），機器人應回應 "My favorite food is pizza"（我最喜歡的食物是披薩）。

<img src="../img/ideas.png" alt="角色在集思廣益新點子的插圖" width="30%" />

提醒一下，以下是分類的基本結構：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

提醒：在撰寫 pattern（模式）時，請使用全大寫並避免使用標點符號。因此，如果您想匹配 "What is your name?"（你的名字是什麼？），應將模式寫成 "WHAT IS YOUR NAME"。

{{% /notice %}}

{{% notice tip %}}

提醒：每次修改分類並想與聊天機器人互動時，請記得儲存檔案。

{{% /notice %}}

試著將這些分類新增到您的機器人中，使用聊天小工具進行測試。此時，機器人應能回應 "Hello"（你好）、"What is your name?"（你的名字是什麼？）、"What is your favorite color?"（你最喜歡的顏色是什麼？）以及 "What is your favorite food?"（你最喜歡的食物是什麼？）。