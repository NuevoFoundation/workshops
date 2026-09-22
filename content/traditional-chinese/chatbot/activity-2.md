```markdown
---
title: "活動 2：設置 PandoraBots"
draft: false
weight: 5
---

## AIML
我們將使用 AIML 來創建我們的聊天機器人。AIML 是 **人工智慧標記語言（Artificial Intelligence Markup Language）** 的縮寫。如果您曾經使用 HTML 製作過網站，您會發現 AIML 的語法看起來非常相似。在開始編寫 AIML 之前，我們需要在 PandoraBots 註冊一個帳戶。
<img src="../img/chat_Alice.png" alt="ALICE 聊天機器人角色的插圖" width="20%" />

## PandoraBots
打開 [https://www.pandorabots.com/](https://www.pandorabots.com/) 並點擊 **Sign Up**（註冊）。輸入電子郵件和密碼來創建一個帳戶。或者，您可以使用 Google、Facebook、Twitter 或 GitHub 的帳戶註冊。如果出現提示，選擇免費試用選項。

## 創建新機器人
註冊完成後，您應該會看到如下頁面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="PandoraBots 的新帳戶登錄頁面" width="40%"/></p>

要創建新機器人，請點擊導航面板中“**My Bots**”旁邊的“+”按鈕。給機器人取一個名字，然後點擊“Create Bot”（創建機器人）。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 PandoraBots 上創建新機器人" width="40%"/></p>

## 編輯機器人
創建新機器人後，機器人的名稱將顯示在導航面板中。點擊 **Edit**（編輯）機器人名稱下方的按鈕，然後選擇 **Code Editor**（代碼編輯器）進入編輯器。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 PandoraBots 上編輯機器人" width="40%"/></p>

編輯器是您撰寫 AIML 文件和分類的地方，它可以讓您與其他人和您的機器人交流。

使用檔案選單創建一個名為 greetings 的新 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 PandoraBots 添加新檔案" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 PandoraBots 添加新檔案" width="40%"/></p>

## Hello World

將以下類別的代碼複製到文本編輯器 `<aiml>` 開始標籤和 `</aiml>` 結束標籤之間：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成後，通過“File”（檔案）下拉菜單保存您的檔案。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 PandoraBots 保存檔案" width="40%"/></p>

## 測試您的機器人
聊天窗口小工具允許您與機器人對話。點擊右下角的“聊天泡泡”圖標，開始與機器人對話。輸入 `Hello`，您應該收到剛剛編碼的回應：`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="與機器人互動測試" width="40%"/></p>
```