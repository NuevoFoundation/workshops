---
title: "導航"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---

Hugo 在每個 Markdown 文件中使用前言 (frontmatter) 的元數據來控制頁面在網站導航中的顯示方式。本指南涵蓋了主要的設置。

## 使用權重（weight）進行頁面排序

`weight` 欄位控制了頁面在左側邊欄和目錄中的排列順序。數值越小的頁面會越先出現。

```yaml
---
title: "活動 1: 入門"
weight: 3
---
```

**建議的權重方案：**

| 頁面類型 | 權重 | 範例       |
|----------|------|------------|
| `_index.md`（著陸頁） | 1    | 工作坊介紹  |
| 設置/先決條件        | 2    | 所需工具    |
| 活動                | 3, 4, 5... | 活動 1, 2, 3 |
| 答案鍵              | 15+  | 不顯示在導航中 |

如果預期稍後需要插入頁面，請在活動頁面的權重之間留有空隙（例如使用 3、5、7 而非 3、4、5）。

## 控制目錄的顯示

### 摺疊的目錄 (建議)

工作坊應以可見的故事介紹啟動，而將活動列表設置為摺疊：

```yaml
---
title: "Python: 基礎"
alwaysopen: false
---
```

使用 `alwaysopen: false`，子頁面將在側邊欄中顯示為可摺疊的樹狀結構。學生隨著學習進度展開各部分。

### 展開的目錄

對於非常短的工作坊（3 項或更少的活動），您可能希望所有部分都可見：

```yaml
---
title: "簡短的工作坊"
alwaysopen: true
---
```

## 隱藏頁面

### 隱藏頁面（建構但不在導航中）

使用 `hidden: true` 為那些應該存在但不應顯示於側邊導航的頁面。學生仍然可以通過直接連結訪問這些頁面。

```yaml
---
title: "答案鍵"
hidden: true
---
```

常見用法：答案鍵、講師筆記、額外內容。

### 草稿頁面（不會在生產環境中建構）

對於尚在編輯中的工作，使用 `draft: true`，這樣它就不會出現在正式網站上：

```yaml
---
title: "未完成的工作坊"
draft: true
---
```

草稿頁面僅在運行 `hugo server -D` 時顯示（`-D` 標誌會包含草稿）。

## 使用 children Shortcode

要在著陸頁上顯示子頁面列表，可以在摺疊的詳細資訊元素中使用 `children` Shortcode：

```html
<details>
<summary>目錄</summary>
{{% children /%}}
</details>
```

這將渲染一個簡潔、可折疊的目錄，學生可在需要時展開。一些現有的工作坊使用 `<details open>` 來設置為展開的預設。

## 工作坊著陸頁範本

以下是一個完整的 `_index.md` 前言範例：

```yaml
---
title: "Python: 基礎"
description: "學習 Python 基礎"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["程式設計基礎"]
difficulties: ["入門"]
prereq: "無"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## 提示

- 在提交之前，使用 `hugo server -D` 測試導航更改
- 確保答案鍵設置為 `hidden: true`，以防學生看到
- 在一個工作坊內保持權重數字一致
- 如果重新排列頁面，請更新所有的權重以避免出現空隙或衝突