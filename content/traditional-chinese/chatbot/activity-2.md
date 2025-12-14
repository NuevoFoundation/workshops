---
title: "活動 2：設置 PandoraBots"
draft: false
weight: 5
---

## AIML
我們將使用 AIML 來建立我們的聊天機器人。AIML 是 **人工智慧標記語言 (Artificial Intelligence Markup Language)** 的縮寫。如果你曾使用過 HTML 建立網站，你會發現 AIML 的格式非常相似。在開始編寫 AIML 之前，我們需要先註冊一個 PandoraBots 帳號。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
請前往 [https://www.pandorabots.com/](https://www.pandorabots.com/) 並點選 **註冊**（Sign Up）。輸入電子郵件地址及密碼來創建帳戶。或者，您也可以使用 Google、Facebook、Twitter 或 Github 帳戶進行註冊。如果出現提示，選擇免費試用方案。

## 創建新機器人
註冊後，您應該會看到如下頁面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="PandoraBots 新帳戶首頁" width="40%"/></p>

要創建新機器人，請使用導航窗格中「我的機器人」旁邊的 “+” 按鈕。為您的機器人命名，然後點擊「創建機器人」（Create Bot）。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 PandoraBots 上創建新機器人" width="40%"/></p>

## 機器人編輯
創建新機器人後，機器人的名稱將出現在導航窗格中。點擊您的機器人名稱下方的 **編輯**（Edit），然後選擇 **代碼編輯器**（Code Editor）進入編輯器。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 PandoraBots 上編輯機器人" width="40%"/></p>

編輯器是您撰寫 AIML 檔案以及分類的地方，這些內容將允許您和其他人與您的機器人對話。

使用檔案功能表來創建名為 greetings（問候）的新 AIML 檔案。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 PandoraBots 上新增檔案" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 PandoraBots 上新增檔案" width="40%"/></p>

## Hello World

將以下分類的代碼複製到文字編輯器中，並放置在 ```<aiml>``` 和 ```</aiml>``` 標籤之間：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成後，通過「檔案」下拉選單保存您的檔案。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 PandoraBots 上保存新檔案" width="40%"/></p>

## 測試您的機器人
聊天介面（Chat Widget）讓您能與您的機器人進行互動。點擊右下角的「聊天氣泡」圖標開始與機器人對話。輸入 `Hello`，您應該會收到您所編寫的回應，`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在 PandoraBots 上測試機器人" width="40%"/></p>