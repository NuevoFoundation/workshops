---
title: "網頁開發者指引"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

此文件僅供**網站開發者**用於修改 [Nuevo Foundation 工作坊專案](https://github.com/nuevoFoundation/workshops) 的範本與樣式使用。

## 在開始之前

在新增/更新網站之前，請確保您已與專案團隊同步，並檢視 [專案待辦清單](https://github.com/NuevoFoundation/workshops/projects/1) 中的現有工作。

## 設置

請遵循 [Getting Started](../getting-started/) 頁面的指示來安裝 Git 和 Hugo，並在本地測試此專案。

## 網頁設計樣式與結構

- **圖片：** 網站使用的圖片應放置在 `themes/images` 
- **CSS** 忽略 SCSS 文件，僅使用 `/themes/docdock/static/css/` 中的 CSS 文件。請確保您要包含的 CSS 已在 `/themes/docdock/layouts/partials/flex/head.html` 檔案內增加引用。

## 徹底解析工作坊頁面

- **完整頁面範本**: 查看頁面所有組件，包括頁首、菜單、主體和頁腳的內容，請參考 `/themes/docdock/layouts/_default/baseof.html`。
- **Head 部分**: 元資訊、CSS 和 JS 文件 `/themes/docdock/layouts/partials/flex/head.html`
- **頂部/菜單導航**: 不要使用 docDock config.toml 值，請改為在 `/themes/docdock/layouts/partials/flex/body-before-content.html` 中新增/編輯 HTML。
- **左側菜單**: `/themes/docdock/layouts/partials/flex/menu.html`
- **頁腳導航**: `/themes/docdock/layouts/partials/flex/body-after-content.html`
- **元數據框**: `/themes/docdock/layouts/partials/flex/body-after-content.html`

## 如果 CSS 消失了怎麼辦

使用 Hugo 時的一個挑戰是建構中 `baseURL` 變數的設置。如果內容正確載入，但 CSS 無法顯示，可能是 `baseURL` 設置的問題。

您可以在建構內容時改變 `baseURL`，而無需更改 config.toml 檔案。以下範例會壓縮 CSS 和 JS，將 baseURL 設為生產環境的 .org URL，並將結果複製到 `public` 目錄。

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## 小技巧與提示

- **忽略 Public 資料夾**: 預設情況下，執行不帶參數的 `hugo` 命令會將網站建構至 public 資料夾。請務必不要將 public 資料夾新增到源代碼控管（目前已在 gitignore 中）。
- **左側導航**: 您可以通過在文件中設置元數據 hidden: true（例如這個工作坊的 index.md markdown）來隱藏左側導航中的內容。
- **局部模板（Partials）**: 若需要在頁面中重複使用某些組件，請在 `/themes/docdock/layouts/partials/flex/` 下創建新局部模板。