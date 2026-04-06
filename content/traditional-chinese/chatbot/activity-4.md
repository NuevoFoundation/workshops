```markdown
---
title: "活動 4：萬用字元"
draft: false
weight: 9
---

## 使用萬用字元
讓我們使用萬用字元來讓機器人能回答更多問題，而不必為每個可能的問題單獨建立新分類。我們將擴展當前的分類，使聊天機器人能夠回答以「food」（食物）、「color」（顏色）或「name」（名字）結尾的任何問題。

{{% notice tip %}}

在模式的開頭使用萬用字元。

{{% /notice %}}

1. 如果使用者輸入一個**以「food」結尾**的問題（例如：「What is your favorite food?」（你最喜歡的食物是什麼？）、「Do you like food?」（你喜歡食物嗎？）、「Do chatbots eat food?」（聊天機器人會吃東西嗎？）），機器人應該回答「My favorite food is pizza」（我最喜歡的食物是披薩）。

2. 如果使用者輸入一個**以「color」結尾**的問題（例如：「What is your favorite color?」（你最喜歡的顏色是什麼？）、「What's your favorite color?」（你最喜歡的顏色是什麼？）），機器人應該回答「My favorite color is blue」（我最喜歡的顏色是藍色）。

3. 如果使用者輸入一個**以「name」結尾**的問題（例如：「What is your name?」（你的名字是什麼？）、「What's your name?」（你的名字是什麼？）、「Do you have a name?」（你有名字嗎？）），機器人應該回答「My name is Chatbot」（我的名字是 Chatbot）。
<img src="../img/idea.png" alt="" width="20%"/>
```