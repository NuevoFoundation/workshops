```markdown
---
title: "活動 4: 萬用字元"
draft: false
weight: 9
---

## 使用萬用字元
讓我們使用萬用字元，使得我們的機器人能回答更多問題，而不需要為每個可能的問題建立一個新的分類。我們可以擴展目前的分類，使聊天機器人能對任何以「food」（食物）、「color」（顏色）或「name」（名字）結尾的問題進行回應。

{{% notice tip %}}

在模式的開頭使用萬用字元。

{{% /notice %}}

1. 如果使用者輸入的問題**以**「food」（例如：「What is your favorite food?」、「Do you like food?」、「Do chatbots eat food?」）**結尾**，機器人應回應「My favorite food is pizza」。（我最喜歡的食物是披薩。）

2. 如果使用者輸入的問題**以**「color」（例如：「What is your favorite color?」、「What's your favorite color?」）**結尾**，機器人應回應「My favorite color is blue」。（我最喜歡的顏色是藍色。）

3. 如果使用者輸入的問題**以**「name」（例如：「What is your name?」、「What's your name?」、「Do you have a name?」）**結尾**，機器人應回應「My name is Chatbot」。（我的名字是 Chatbot。）

<img src="../img/idea.png" alt="一個角色靈光乍現的插圖" width="20%"/>
```