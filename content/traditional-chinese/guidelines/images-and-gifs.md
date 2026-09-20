---
title: "圖片與動圖"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

圖片能讓工作坊對年輕學習者更具吸引力。請遵循以下指南以確保圖片具有可訪問性、適當的大小，並且能在各平臺上正常顯示。

## 圖片大小

切勿讓圖片沒有寬度限制。如果沒有設定 `width` 屬性，圖片會以原始大小顯示，這通常超出內容區域。

| 圖片類型 | 目標寬度 | 範例 |
|-----------|-------------|---------|
| 完全 UI 截圖（Replit, IDE） | 60% | Replit 上傳對話框 |
|程式碼輸出 /終端機 | 70% | dotnetfiddle 結果 |
| 概念圖表 | 50% | 顏色理論、數據結構 |
| 照片範例 | 40-50% | python-pixel 貓圖片 |
| 小圖示 / 徽章 | 15-25% | 表格、小型圖表 |
| 裝飾藝術 | 20-30% | 角色插圖 |
| 主題圖片 | 100% | 僅用於登陸頁面 `_index.md` |

**請使用百分比，而非像素值。** 百分比寬度具有響應式效果，能在手機和平板上縮放。像素寬度則可能在小螢幕上溢出。

```markdown
<!-- 正確: 響應式 -->
<img src="../media/screenshot.png" alt="Replit 程式碼編輯器" width="60%">

<!-- 避免: 固定像素寬度 -->
<img src="../media/screenshot.png" alt="Replit 程式碼編輯器" width="900px">
```

## 添加圖片

### 方法 1: Markdown 語法

```markdown
![圖片描述](../media/filename.png)
```

### 方法 2: HTML img 標籤（需要控制寬度時）

```html
<img src="../media/filename.png" alt="圖片描述" width="50%">
```

### 方法 3: Hugo figure short代碼

```
{{</* figure src="../media/filename.png" alt="描述" width="50%" */>}}
```

`figure` short代碼會將圖片包裹在 `<figure>` 元素內。注意：大多數現有工作坊使用的是上述的 Markdown 或 HTML 方法。較舊的工作坊可能使用 `img/` 而不是 `media/`—這兩者在 Hugo 中用法相同。

## 可訪問性 (alt文字)

每張圖片 **必須** 包含描述性的 alt 文字，此為必須條款。

| 正確 | 錯誤 |
|----|-------|
| `alt="Replit 程式碼編輯器顯示 Python hello world 程式"` | `alt="screenshot"` |
| `alt="RGB 顏色圖，圖中紅、綠、藍圓形重疊"` | `alt="image"` |
| `alt=""`（對於純裝飾用途的圖片，例如分隔線） | `alt="Cannot load image"` |

對於翻譯過的工作坊，alt 文字應使用該頁面的語言：
- 英文: `alt="A friendly chatbot welcoming users"`
- 葡萄牙文: `alt="Um chatbot amigavel dando boas-vindas aos usuarios"`
- 韓文: `alt="사용자를 환영하는 친근한 챗봇"`

## 文件命名

- 使用 **小寫** 文件副檔名：`.png`、`.jpg`、`.gif` （避免使用 `.PNG`、`.JPG`）
- 使用 **具描述性名稱**：`replit-upload-dialog.png`（避免使用 `img1.png`）
- 使用 **連字符** 分隔單詞：`color-theory-diagram.png`（避免使用 `color_theory_diagram.png`）
- 文件名應保持簡短但有意義

## 圖片位置

新的工作坊應使用 `media/` 目錄（腳本會自動生成）。部分較舊的工作坊使用 `img/` 目錄—這兩者在 Hugo 中用法相同。

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- 圖片放置於此
    screenshot.png
    diagram.png
```

在頁面中使用圖片的相對路徑進行引用。在 `_index.md` 中，使用 `media/image.png`。在活動頁面和答案頁中，使用 `../media/image.png` （在 Hugo 中，這些頁面會渲染為更深一級的層級）。

{{% notice warning %}}
Hugo 會按 **頁面 URL**，而非檔案系統的位置解析相對路徑。對於 `/workshop/section/activity/` 之類的子頁面，路徑 `../media/file.png` 會解析為 `/workshop/media/file.png`。這是正確的模式。請勿「修復」這些 `../` 路徑—它們是經過設計的。
{{% /notice %}}

## 動圖 (GIFs)

GIF 適合展示短時間的互動場景（如按按鈕、拖曳元素）。請注意以下事項：

- **簡短**：最好控制在 5-15 秒內
- **小型**：儘量保持在 2MB 以下（大 GIF 會拖慢頁面加載速度）
- **清晰**：使用適當的幀率。螢幕錄製建議 10-15fps。
- **可訪問**：為 GIF 添加描述其內容的 alt 文字

如果動畫不是理解內容的關鍵，可考慮使用帶標題的靜態圖片代替 GIF。

## 截圖

當為工作坊截圖時，請遵循以下步驟：

1. **精確裁剪**至相關區域  
2. **保持界面整潔**（無個人書籤、通知等）  
3. **在工作坊內保持一致的大小**（勿同時使用 1080p 和 4K 截圖）  
4. **突出相關區域**，如果截圖包含許多 UI 元素  