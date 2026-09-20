---
title: "第九房間：安全堡壘"
description: "利用 GitHub 的安全功能強化您的代碼庫。"
difficulties: ["進階"]
weight: 9
---

你進入了一個充滿安全措施的房間。鎖、盾牌和安全監視器環繞四周。一個嚴肅的聲音宣佈：「加強您的代碼安全以繼續前進！」

## 您的任務

1. 為您的代碼庫啟用 Dependabot 警示。
2. 為您的代碼庫新增一份安全政策。
3. 使用 GitHub Actions 執行一次代碼掃描警告 (若您的代碼庫是公開的)。

## 指示

1. 前往代碼庫的「設定 (Settings)」選項卡。
2. 在左側邊欄點擊「安全與分析 (Security & analysis)」。
3. 啟用 Dependabot 警示。
4. 在您的代碼庫中，新增一個 `.github/SECURITY.md` 的新檔案。
5. 在該檔案中添加基本的安全指南。
6. 如果您的代碼庫是公開的，請在「安全與分析 (Security & analysis)」設定中啟用代碼掃描。

{{< notice danger >}}
**重要事項：** 處理安全設定時請務必小心。在啟用任何功能之前，請確保您了解其用途。
{{< /notice >}}

{{< expand "範例安全政策" >}}

# 安全政策

## 回報漏洞

如果您發現本項目中存在安全漏洞，請發送電子郵件至 security@example.com。我們將及時解決所有安全漏洞。

## 支援的版本

使用此部分告訴人們哪些版本的項目目前仍提供安全更新支援。

| 版本    | 是否支援         |
| --------| ----------------- |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:               |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:               |

{{< /expand >}}
設定好您的安全政策後，您在其中指定用於回報漏洞的電子郵件地址是什麼呢？請在下方輸入：

<label for="finput">輸入電子郵件地址的欄位：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
做得好，安全專家！您已經強化了您的代碼庫。前往最後的挑戰吧！
{{< /notice >}}