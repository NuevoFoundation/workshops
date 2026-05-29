---
title: "活動 2：設定 PandoraBots"
draft: false
weight: 5
---

## AIML
我們將會使用 AIML 來建立我們的聊天機器人。AIML 的全名是 **人工智慧標記語言（Artificial Intelligence Markup Language）**。如果你曾經使用過 HTML 製作網站，你會發現 AIML 看起來非常類似。在我們開始撰寫 AIML 以前，需要先在 PandoraBots 上註冊一個帳戶。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
前往 [https://www.pandorabots.com/](https://www.pandorabots.com/) 並點擊 **註冊（Sign Up）**。輸入電子郵件和密碼來創建一個帳戶。或者，你也可以使用 Google、Facebook、Twitter 或 Github 的帳戶進行註冊。如果系統提示，請選擇免費試用選項。

## 創建一個新機器人
註冊成功後，你應該會看到如下的頁面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="PandoraBots 新帳戶首頁" width="40%"/></p>

要創建一個新機器人，使用導航列「My Bots」旁邊的「+」按鈕。為你的機器人命名，然後點擊「Create Bot」。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 PandoraBots 上創建一個新機器人" width="40%"/></p>

## 編輯機器人
當你創建了新機器人後，機器人的名稱將出現在導航列中。點擊機器人名稱下方的 **Edit**，然後選擇 **Code Editor** 來進入編輯器。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 PandoraBots 上編輯機器人" width="40%"/></p>

此編輯器就是你用來撰寫 AIML 文件以及定義分類的地方，這些文件和分類可讓你及其他人與你的機器人進行互動。

使用檔案選單（File Menu）來創建一個名為 `greetings` 的新 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 PandoraBots 上新增檔案" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 PandoraBots 上新增檔案" width="40%"/></p>

## Hello World

將以下分類的程式碼複製到文字編輯器中，放在起始標籤 ```<aiml>``` 和結束標籤 ```</aiml>``` 之間：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成後，通過「檔案（File）」下拉選單儲存文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 PandoraBots 上新增檔案" width="40%"/></p>

## 測試你的機器人
聊天小工具（Chat Widget）允許你與機器人對話。點擊右下角的「聊天氣泡」圖示，開始與機器人對話。輸入 `Hello`，你應該會收到你剛才編寫的回應：`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在 PandoraBots 上測試機器人" width="40%"/></p>
