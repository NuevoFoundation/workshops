---
title: "建立新工作坊"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 2
---

本指南將帶您從創意到提交拉取請求，逐步創建一個新的工作坊。在開始之前，請完成 [入門指南](../getting-started/) 的設置（Git、Hugo、fork），並閱讀 [網站架構概述](../site-architecture/)。

## 我們的理念

Nuevo Foundation 的工作坊應該像 **引導冒險** 而非教科書。每個工作坊都講述一個學生可以按自己的步調進行的故事。最好的工作坊具備以下特點：

- **以故事為導向**：學生跟隨角色完成任務（例如 Benji 小狗需要一個網站，Alex 小蜜蜂需要一個蜂巢，DJ Nuvi 需要一張熱門混音專輯）
- **可個人化**：學生可以輕鬆更改主題以符合自己的興趣（例如，他們的寵物取代 Benji，他們的國家取代哥斯達黎加）
- **自我步調**：內容清晰，學生即使教師不在時也能獨立完成
- **循序漸進**：活動逐步構建，每次只介紹一個概念
- **有趣**：鼓勵的語氣、吉祥物角色、視覺上的獎勵以及最後的慶祝

## 從最佳的工作坊中學習

在構建自己的工作坊之前，請先研究以下金標準的工作坊：

### 網頁基礎知識 (HTML/CSS) — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **主題**：幫助被哈維颶風流離失所有家園的 Benji 小狗建立他永久的住所網站
- **成功之處**：情感導向，每頁都有 YouTube 教學視頻，嵌入 CodePen 可立即編碼，第五活動讓學生建立自己的網站並部署到 GitHub Pages
- **關鍵模式**：敘事 → 概念 → 視頻 → 參考表 → 實踐練習

### Python 龜圖案 — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **主題**：幫助 Alex 小蜜蜂用 Python 繪圖建立一個蜂巢家園
- **成功之處**：11 部 YouTube 視頻，嵌入 Codebunga IDE，代碼可視化的結果（學生可以看到代碼繪製出形狀），逐步增加複雜度（直線 → 正方形 → 六邊形 → 蜂巢 → 曼陀羅花）
- **關鍵模式**：故事背景 → 視頻 → 代碼示例 → 交互 Codebunga → 挑戰

### EarSketch (Python 和 JS 模塊) — [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **主題**：幫助 DJ Nuvi 使用代碼製作熱門混音專輯
- **成功之處**：學生聽到自己的代碼結果（音樂！），即時聽覺反饋，使用專業工具（Georgia Tech），在音效選擇方面具有創造自由
- **關鍵模式**：音樂概念 → 編程概念 → 建構 → 聆聽 → 循環迭代

## 使用 Copilot 創建工作坊

此庫包含 GitHub Copilot CLI 的 `workshop-builder` 技能。
此技能會根據以下指南、學習相關的現有工作坊，使用腳手架腳本撰寫內容並進行出版檢查。

在庫的根目錄啟動 Copilot CLI：

```bash
copilot
```

如果在 Copilot 已經運行時添加了技能，請重新加載項目技能：

```text
/skills reload
```

確認 Copilot 能夠識別它：

```text
/skills info workshop-builder
```

然後在提示中包含技能名稱和工作坊簡述：

```text
Use the /workshop-builder skill to create a 45-minute beginner Python
workshop for ages 10–13. It should run in the browser and teach variables,
input, and if statements through a robot rescue story.
```

此技能使用標準問卷來收集標題、年齡範圍、課程時長、先前的編程經驗、學習結果、編程語言、線上或實體交付方式、活動數量、故事以及特殊要求。會一起收集所有缺失的信息，然後才創建文件。如果請求的活動數量可能超過可用時間，則技能會警告估計但仍按用戶請求的數量執行。

如果請求清楚地要求創建、修訂或審查 Nuevo Foundation 工作坊，Copilot 可能也會自動選擇此技能。

## 步驟 1：腳手架生成工作坊

使用腳手架腳本生成正確的目錄結構和模板文件。請勿手動創建工作坊文件——腳手架確保了正確 Hugo 的前導內容、文件命名和目錄布局。

**要求**：Python 3.7 或更高版本。使用 `python --version`（macOS/Linux 上為 `python3 --version`）確認版本。

在 `workshops` 資料庫根目錄執行：

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

首先使用 `--dry-run` 預覽將被創建的內容且不寫入任何文件：

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics --dry-run
```

這將生成標準啟動結構：

```
content/english/my-workshop/
├── _index.md          ← 登錄頁面（介紹、前提條件、目錄）
├── activity-1.md      ← 第一項活動
├── activity-2.md      ← 第二項活動
├── activity-3.md      ← 第三項活動
├── answer-key.md      ← 答案鍵（導航中隱