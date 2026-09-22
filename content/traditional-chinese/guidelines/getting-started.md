```yaml
---
title: "Getting Started"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---
```

## 前置需求條件

| 工具 | 目的 | 安裝連結 |
|------|---------|-------------|
| **Git** | 版本管理 | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | 建構工作坊網站 | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (推薦) | 文本編輯器 | [code.visualstudio.com](https://code.visualstudio.com/download) |

不熟悉 Git 嗎？查看 GitHub 的 [快速入門指南](https://docs.github.com/en/get-started/quickstart)。

### 快速安裝 Hugo

**Windows (winget):**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew):**
```
brew install hugo
```

**Linux (snap):**
```
snap install hugo
```

使用 `hugo version` 驗證。你應該看到包含 **extended** 的輸出。

## 參考連結

- [GitHub 倉庫](https://github.com/NuevoFoundation/workshops)
- [工作坊網站](https://workshops.nuevofoundation.org/)

## 示範影片

- [工作坊 GitHub 倉庫開發流程](https://youtu.be/LpjucoAVviI)
- [工作坊 GitHub 倉庫結構](https://youtu.be/cygmE6LGcOw)

## 分叉並克隆倉庫

貢獻使用 [分叉模型](https://help.github.com/articles/fork-a-repo/)。你將修改推送到自己的分叉，然後開啟拉取請求以合併更改到主倉庫。

### 1. 分叉倉庫

點擊 <a target="_blank" href="https://github.com/nuevoFoundation/workshops">工作坊倉庫</a>右上角的 **Fork**：

![GitHub 上 Fork 按鈕的截圖](/guidelines/media/fork.png)

### 2. 克隆你的分叉

將 `[your-username]` 替換為你的 GitHub 使用者名稱：

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. 設置上游遠程倉庫

這可以幫助你從主倉庫拉取更新並防止意外推送：

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

使用 `git remote -v` 進行驗證：

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## 本地建構和測試

在 `workshops` 資料夾中執行：

```bash
hugo server -D
```

- `-D` 包含草稿內容以便預覽進行中的工作。
- 網站會在幾秒鐘內建構完成，並可在 **http://localhost:1313/** 瀏覽。
- Hugo 會監視文件變更並自動重新載入瀏覽器。

要停止伺服器，按 `Ctrl+C`。

## 保持你的分叉最新

在開始新工作前，與上游同步：

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## 示例操作流程

**情境**：進行簡單修改並提交拉取請求。

### 建立主題分支

首先確保你的分叉是最新的：

```bash
git checkout master
git checkout -b my-change
git push --set-upstream origin my-change
```

### 進行修改

使用 VS Code 開啟倉庫資料夾。導航到你想修改的文件。以此範例來說，編輯 `content/english/guidelines/getting-started.md`。若想深入了解文件結構，請參閱 [網站如何建構](../site-architecture/)。

### 提交並推送

```bash
git add content/english/guidelines/getting-started.md
git commit -m "Description of what changed"
git push
```

**提示**：使用 `git commit -am "message"` 可一次性暫存所有修改的文件並提交。

### 開啟拉取請求

導航至你在 GitHub 上的分叉。你應該會看到提示以從你的最近推送建立拉取請求：

![GitHub 上 Compare and Pull Request 按鈕的截圖](/guidelines/media/compare-and-pull.png)

如果未看到提示，前往 **Pull Requests > New pull request**：

![GitHub 上 New Pull Request 按鈕的截圖](/guidelines/media/create-new-pr.png)

確認你的基分支（目標）和頭分支（來源）正確，添加標題和描述，然後提交。

## 建立新工作坊？

請務必使用 scaffold 腳本以生成正確的目錄結構和範本。不要手動創建工作坊文件。

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

查看 [新工作坊指南](../new-workshops/) 以獲取完整操作流程、選項和提交拉取請求前的檢查清單。