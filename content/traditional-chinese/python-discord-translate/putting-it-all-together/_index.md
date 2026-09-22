---
title: "結合所有內容"
draft: false
weight: 4
---

你的機器人已經上線，並且 LibreTranslate 也在運作。現在我們來結合它們，讓 Nuvi 的朋友們可以用不同的語言聊天！

## 您將構建什麼

你的機器人將成為一個**翻譯助手**，它可以：
- 確定人們使用的語言
- 自動為需要的人翻譯消息
- 私下發送翻譯（以免對話變得凌亂）
- 提供一個備用的 `/translate` 指令以備不時之需

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 說：</strong> 如果這看起來太多不用擔心！我們已將其分成易於跟隨的較小步驟。
{{< /alert >}}

## 在您開始之前

檢查您是否已經：
- 正在運行的 LibreTranslate（支援英文和西班牙文）
- 你的機器人已上線（`/hello` 指令有效）
- 安裝了 `requests` 套件
- 在 Discord 中開啟了消息內容功能（讓機器人可以讀取消息）

## 完成時您會擁有的功能

您的機器人將擁有以下指令：
- `/register_language` - 註冊翻譯
- `/my_language` - 檢查您的設置
- `/stop_translation` - 停止接收翻譯
- `/translate` - 手動翻譯內容

## 測試您的機器人

完成構建後：

1. **註冊用戶**：讓朋友選擇不同的語言
2. **發送消息**：查看翻譯是否出現在私訊中
3. **測試手動模式**：使用任何短語測試 `/translate`
4. **退出翻譯**：確保 `/stop_translation` 有效

## 需要幫助嗎？

| 問題 | 檢查位置 |
|-----|---------|
| 無法檢測語言 | [檢測語言功能](detect-language-function/) |
| 翻譯不起作用 | [翻譯文字功能](translate-text-function/) |
| 無法註冊 | [註冊指令](registration-commands/) |
| 沒有自動翻譯 | [消息處理](message-handling-and-translate/) |
| 想要完整程式碼 | [完整機器人程式碼](full-code/) |

---