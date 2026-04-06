```markdown
---
title: "Activity 2: Setup PandoraBots"
draft: false
weight: 5
---

## AIML
我們將使用 AIML 來建立我們的聊天機器人。AIML 是 **人工智慧標記語言 (Artificial Intelligence Markup Language)** 的縮寫。如果您曾經使用過 HTML 製作網站，您會發現 AIML 看起來非常相似。在開始撰寫 AIML 之前，我們需要在 PandoraBots 上註冊一個帳戶。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
前往 [https://www.pandorabots.com/](https://www.pandorabots.com/) 並點選 **Sign Up**。輸入電子郵件和密碼來創建一個帳戶。或者，您可以使用 Google、Facebook、Twitter 或 Github 帳戶註冊。如果出現提示，請選擇免費試用選項。

## 建立一個新機器人
註冊完成後，您應該會看到如下的頁面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="new account landing page on pandorabots" width="40%"/></p>

要建立一個新機器人，請使用導航窗格中“+”按鈕，位於 My Bots 旁邊。為其命名並點選 “Create Bot”。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="creating a new bot on pandorabots" width="40%"/></p>

## 機器人編輯
建立完成後，機器人的名字會出現在導航窗格中。點選 **Edit**，在您的機器人名字下方，然後選擇 **Code Editor**，進入編輯器頁面。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editing a bot on pandorabots" width="40%"/></p>

編輯器是您撰寫 AIML 文件和分類的地方，這將允許您和其他人與您的機器人對話。

使用文件選單建立一個名為 greetings 的新 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="adding a new file on pandorabots" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="adding a new file on pandorabots" width="40%"/></p>

## Hello World

將以下分類的程式碼複製到編輯器內，放置於 ```<aiml>``` 起始標籤和 ```</aiml>``` 結束標籤之間：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成後，透過“File”選單儲存您的文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="adding a new file on pandorabots" width="40%"/></p>

## 測試您的機器人
使用聊天視窗 (Chat Widget) 與您的機器人對話。點選右下角的“聊天泡泡”圖示以開始聊天。輸入 `Hello`，您應該會收到您剛剛撰寫的回應，`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="adding a new file on pandorabots" width="40%"/></p>
```