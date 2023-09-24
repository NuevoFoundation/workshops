---
title: "組合網站的各個部分"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 3
---

為了使你的瀏覽器了解你網站的每個網站元素是什麼，我們需要使用HTML標籤(label)對其進行標記。 HTML又稱做超文本標記語言(HyperText Markup Language)。 標籤(label)是被符號 `<`, `>` 包圍的單詞。 例如，`<img>` 標記告訴你的瀏覽器 “這是個圖像”。 `<button>` 標記告訴它 “這是一個按鈕”。

![HTML標籤圖片](../media/web-tags-sm.png "HTML標籤圖片")

標籤可以用來組織你的網頁！ 下圖概述了基本網頁的結構。 `<head></head>`通常包含其他使用的資訊庫(library)和頁面標題，而`<body></body>`包含大部分顯示的內容。

<p style="text-align: center; "><img src="../media/htmlTagStructure.png" alt="HTML標籤結構" width="500"/></p>

大多數標籤都需要一個開始標籤和一個結束標籤。 例如，你將看到所有頁面的頂部都有`<html>`開頭標籤，而結尾有`</html>`結束標籤。 這告訴瀏覽器HTML元素在何處開始和在何處結束。 將標籤視為引號； 例如，電腦理解在`<html>`和`</html>`標記之間的所有內容都是HTML網站的一部分。

有一些標籤（例如圖像標籤`<img>`）是 self-closing，這表示它們僅需要一個開始標籤，而無需關閉標籤。

這是一個例子：

 <p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html,result" data-user="Sunny-Dee" data-slug-hash="ErRraG" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="HTML Basics">
    <span>See the Pen <a href="https://codepen.io/Sunny-Dee/pen/ErRraG/">HTML Basics</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
