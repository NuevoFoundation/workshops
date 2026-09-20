---
title: "標籤與元資料"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---

每個工作坊頁面均使用 YAML 前置資料來控制其在網站上的顯示方式。本指南將解釋每個欄位的作用以及使用方式。

## 必須的前置資料

每個 markdown 文件至少需要以下內容：

```yaml
---
title: "頁面標題"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| 欄位 | 作用 | 範例 |
|------|------|------|
| `title` | 在導航中與頁面標題中顯示的標題 | `"Python: 基礎"` |
| `date` | 最後更新日期（顯示在網站上） | `2026-09-16T00:00:00-07:00` |
| `draft` | 已發佈為 `false`，開發中為 `true` | `false` |

## 工作坊主頁欄位

工作坊的 `_index.md` 文件支持更多欄位：

```yaml
---
title: "Python: 基礎"
description: "學習 Python 的基礎知識，包括變數、迴圈和函數"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programming-basics"]
difficulties: ["beginner"]
prereq: "無"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| 欄位 | 作用 | 值 |
|------|------|----|
| `description` | 在列表中顯示的簡短摘要 | 自由文本 |
| `language` | 程式語言篩選器 | 來自 `data/taxonomy.yaml` 的標籤 |
| `topics` | 主題篩選器 | 一個或多個來自 `data/taxonomy.yaml` 的標籤 |
| `difficulties` | 難度篩選器 | 一個或多個來自 `data/taxonomy.yaml` 的標籤 |
| `prereq` | 前置條件 | `"無"` 或其它工作坊名稱 |
| `hidden` | 是否從導航中隱藏 | `true` / `false` |
| `alwaysopen` | 目錄展開行為 | `false`（首選） |
| `icon` | 網站首頁的 Font Awesome 圖示 | 請參見下方圖示列表 |
| `weight` | 在導航中的排序順序 | 數字（數字越低排越前） |

`language`、`topics` 和 `difficulties` 欄位決定工作坊如何出現在"工作坊"選項卡中的篩選器中。請僅使用 `data/taxonomy.yaml` 中的受控值。未知值不會創建新的篩選選項。

範例：

```yaml
language: "javascript"
topics: ["games", "web"]
difficulties: ["beginner"]
```

## 常用圖示

首頁為每個工作坊顯示一個圖示。在 `icon` 前置資料欄位使用 [Font Awesome](https://fontawesome.com/icons) 類別：

| 類別 | 適用於 |
|------|--------|
| `fab fa-python` | Python 工作坊 |
| `fab fa-html5` | HTML/網頁工作坊 |
| `fab fa-js` | JavaScript 工作坊 |
| `fas fa-laptop-code` | 一般程式編碼 |
| `fas fa-microchip` | 硬體 / Arduino |
| `fas fa-shield-alt` | 資安工作坊 |
| `fas fa-database` | SQL / 資料工作坊 |
| `fas fa-code` | 一般用途（默認） |
| `fas fa-gamepad` | 遊戲工作坊 |
| `fas fa-music` | 音樂 / 聲音相關 |

## 活動頁面欄位

活動頁面的模板較為簡單：

```yaml
---
title: "活動 1：Hello World"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## 答案頁面欄位

答案頁必須從導航中隱藏：

```yaml
---
title: "Python: 基礎 - 答案"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## 日期欄位

`date` 欄位顯示於每頁的頁腳。每次對頁面進行重大更新時，請更新此欄位，讓訪客知道內容是最新的。

格式：`YYYY-MM-DDTHH:MM:SS-07:00`（帶時區的 ISO 8601）或 `YYYY-MM-DD`（僅日期）。

## YAML 小提示

- 如果字符串中包含冒號，請務必將其用雙引號括起來：`title: "Python: 基礎"`
- 布林值不需要引號：`draft: false`
- 不要使用制表符（Tab）——YAML 要求使用空格進行縮排。
- 前置資料必須位於文件最上方的 `---` 分隔符之間。