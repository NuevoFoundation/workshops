---
title: "挑戰1 - 創建一個基本網站"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 4
---

## 挑戰1 - 創建一個基本網站

1. 打開網絡編輯器 CodePen（單擊下面的 “嘗試一下！”按鈕）
2. 使用標題標籤(`<head>`)添加標題，使用段落標籤(`<p>`)寫有關Benji的段落
3. 如果有時間：寫一份Benji最喜歡的食物清單：火雞，花生醬和奶酪

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">嘗試一下！</a>

使用此參考圖可以自己嘗試一些HTML標籤。

標籤 | 說明 | 例子
---|--------------|----------
`<html></html>`                         | 描述一個HTML文檔。 任何網站都必須以開始標記開頭，並以結束標記結尾。 | 上述的網絡編輯器 CodePen 有例子。
`<!-- -->`                              | 描述評論。 註釋供其他網站設計人員查看，但不會顯示在網站上。 |`<!-- This line will not show in the browser -->`
`<head></head>`                         | 包含所有向瀏覽器提供信息以正確顯示網站的HTML元素。 `<head>` 和 `</head>` 之間的HTML元素不會顯示。 | 上述的網絡編輯器 CodePen 有例子。
`<title></title>`                       | 包含用於命名瀏覽器選項卡的網站標題。 | `<head>`<br>`<title> My Website </title>`<br>`</head>`
`<body></body>`                         | 包含頁面中顯示的所有HTML元素，例如文本和圖片。 | 上述的網絡編輯器 CodePen 有例子。
`<h1></h1>`<br> ... <br> `<h6></h6>`    | 定義標題/標題。 `<h1>`定義最重要（最大）的標題/標題，而`<h6>`定義最不重要（最小）的標題。 | `<h1>This will be a big title</h1>`<br> `<h4>This will be a smaller title</h4>`
`<p></p>`                               | 描述一個段落。 | `<p>Dogs evolved to love humans. In conclusion, dogs are a human’s best friend.</p>`
`<div></div>`                           | 在網站上一個部分。 | `<div>`<br>`<h1>All about me</h1>`<br>`</div>`
`<img>`                                 | 一個圖像。 這是一個自動關閉的代碼，但你必須指定圖片來源，以便瀏覽器知道從何處獲取圖片。 | `<img src="aka.ms/Benji-the-dog">`
`<hr>`                                  | 畫一條水平線。 如果你想分頁的內容，另一個有用的自動關閉標籤。 | ... <br> `<hr>` <br> ...
`<ul>`<br>`<li>`<br>`</li>`<br>`</ul>`  | 一個列表。 要開始列表，請使用`<ul>`標記。 對於要添加到列表中的每個項目，請在項目周圍加上`<li>`和`</li>`標記。 用`</ul>`標記完成列表。| `<ul>`<br>`<li>This is a list item.</li>`<br>`</ul>`