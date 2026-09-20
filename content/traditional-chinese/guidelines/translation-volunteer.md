---
title: "翻譯志工指南"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

感謝您幫助讓更多孩子能夠接觸到這些工作坊！本指南將說明如何將現有的工作坊翻譯成新語言。

## 在您開始之前

1. 檢查目標語言的工作坊是否已經存在。在 `content/` 目錄中瀏覽語言資料夾：

| 資料夾 | 語言 |
|--------|------|
| `content/english/` | 英文 |
| `content/espanol/` | 西班牙文 |
| `content/brazilian-portuguese/` | 巴西葡萄牙文 |
| `content/korean/` | 韓文 |
| `content/francais/` | 法文 |
| `content/german/` | 德文 |
| `content/simplified-chinese/` | 簡體中文 |
| `content/traditional-chinese/` | 繁體中文 |
| `content/kyrgyz/` | 吉爾吉斯文 |

2. 在 GitHub 上提交[翻譯請求議題](https://github.com/NuevoFoundation/workshops/issues/new)，讓其他人知道您正在進行翻譯。

## 翻譯流程概述

每個語言都有對應於 `content/` 資料夾下的獨立目錄。每種語言內的資料夾結構和英文版本相同：

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## 步驟詳解

### 1. 複製英文工作坊

將整個英文工作坊資料夾複製到您的目標語言目錄：

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. 翻譯內容

針對每個 `.md` 檔案：

- **翻譯** 所有可見文字（標題、段落、指示、提示）
- **保留** 所有 Hugo 的前言設定鍵（`title`, `date`, `draft`, `weight`, 等）為英文
- **翻譯** 前言設定的值（例如：`title: "Python: Conceptos basicos"`）
- **保留** 所有程式碼示例為英文（程式碼是通用的）
- **翻譯** 程式碼註解（如果有的話）
- **保留** 所有檔案路徑、圖片參考及 Hugo 短代碼不變
- **翻譯** 圖片的替代文字（alt text）為目標語言

### 3. 處理圖片

- **共用圖片**（程式碼截圖、圖表）：將英文的 `img/` 或 `media/` 資料夾複製到相應的翻譯目錄。圖片檔案在不同語言中是相同的。
- **含有大量文字的圖片**（例如附有英文文字的圖片）：如果可能，請建立本地化版本；如果無法，請保留英文版本，並在您的 PR 中註明。
- **替代文字（alt text）**：務必將替代文字翻譯成目標語言。螢幕閱讀器會使用頁面語言的設定。

### 4. 本地測試

```bash
hugo server -D
```

前往您的翻譯工作坊，並確認以下項目：

- 所有頁面均能正常載入
- 圖片顯示正確
- 導覽功能正常（目錄、上一頁/下一頁）
- 程式碼示例無異常

### 5. 提交您的合併請求（PR）

- 標題：`Translation: [workshop-name] to [language]`
- 描述：列出所有翻譯的檔案，以及任何仍含有英文文字的圖片
- 確保您翻譯了**整個工作坊**，而不僅僅是首頁

## 提示

- 像學生一樣學習這個工作坊。如果翻譯的語句不通順，請重述更清楚的說法。
- 保持句子簡潔明瞭。這些工作坊的目標群體年齡在 8 到 18 歲之間。
- 如果遇到技術術語不確定該如何翻譯，可以保留英文原文，並在目標語言中加上簡短的解釋。
- 不需要翻譯 URL 或資料夾名稱中的工作坊名稱——它們必須保持英文以符合 Hugo 的路由規則。

## 特定語言說明

### 西班牙文

- 使用 **tú** 動詞變位，適合泛拉丁美洲地域使用（而非秘魯的 voseo）
- 翻譯程式碼註解，但保持變數與函數名稱為英文
- 像 "string"、"loop"、"function" 這類技術術語可以保留原英文，並在首次出現時加上簡短的西班牙文解釋