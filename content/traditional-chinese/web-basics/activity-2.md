---
title: "挑戰2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

## 用CSS設計網站的樣式

HTML標籤告訴瀏覽器要使用哪些網站元素（標題，照片，表格，等）。但是我們還需要告訴它如何顯示和擺放這些元素。我們可能希望標題位於中間或網站的右側; 我們也可能想要放張圖片再右側。我們可以通過兩種方式來設計網站的樣式：
1. 使用HTML屬性 
2. 使用階層式樣式表 (CSS)

### 階層式樣式表（CSS）

雖然HTML屬性很容易使用，但它們很快就會變得混亂。如果我們希望做很多樣式設計，HTML元素可能會變得很長且難以閱讀。此外，如果我們想用相同的方式設置許多元素的樣式呢，我們將不得不複製每個元素的所有屬性。這樣不但效率不高並且容易出錯。對於設計大多網站樣式，最好使用CSS。

CSS文件與HTML標記緊密配合。每個HTML標籤可以具有一個`class`屬性或一個`id`有助於標識每個元素的屬性。不同的元素可以有相同的類（`class`），一個元素可以有多個不同的類(`class`)。但是，一個元素只能有一個單一的`id`，並且該`id`無法在元素之間共享。CSS文件會使用這些屬性來顯示與 `class`或`id`相關的網站元素。

以下是一的例子：

<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> See the Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Styling it up</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**單擊左上角的 “HTML” 選項以查看HTML程式編碼 ，然後單擊 “CSS” 選項以查看CSS 程式編碼。**

1.	讓我們看一下HTML代碼。找具有屬性"info"的標籤`<div>`，看起來像`<div id="info">`。通過 `<div>` 的 `id`，我們可以使用CSS來為這個HTML元素指定樣式。
2.	切換到CSS文件。在這，我們還可以為特定類型的所有元素賦予樣式。例如，我們可以使用CSS為所有`<header>`元素賦予相同的樣式。在`<header></header>`中，我們告訴瀏覽器為所有標題(header)著`#0097A7`色（藍綠色）。

讓我們討論一下CSS的語法。
-	首先，如果要為所有具有相同標籤的元素（例如: `<header>`）設置統一樣式，只需輸入名稱即可（例如: header）。
-	如果要使用`class`或`id`設置元素樣式，請分別在 `class` 或 `id` 名稱前放置 `.` 或 `#`。
-	然後，對於要更改的每個屬性，使用這個格式：`屬性名稱(attribute-name)：值 (value)` 並且以 `;` 結尾。所有這些樣式都應由 `{` 和 `}` 包圍。

本教程中無法涵蓋所有樣式元素。上網查詢，如果你不確定如何使用CSS完成所需的樣式。

![上網查詢CSS的GIF](../media/web-search.gif "上網查詢CSS的GIF")

{{% notice tip %}}

儘管CSS可以識別140種顏色名稱，例如“green(綠色)”，“red(紅色)” 和 “blue(藍色)”，但這仍然是有限制性的。例如，如果我們想要深綠色或稍淺的綠色怎麼辦？為此，我們可以引用十六進製或RGB形式的顏色。檢查<a href="https://htmlcolorcodes.com/color-names/" target="_blank">此鏈接</a>以查看顏色及其對應的十六進制形式。

{{% /notice %}}

### 添加新字體

- 讓我們從網上導入`Heebo`字體。首先，複製貼上以下文字於CSS文件頂部: `@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- 然後，我們將`body`標籤設定適用此字體。由於`body`標籤包含所有HTML元素，所有元素都會使用此字體。

![body標籤列子](../media/bodytag.PNG "body標籤列子")

請注意，花括號內的格式為： 名稱(name): 值(value);
- `@import url（' https://fonts.googleapis.com/css?family=Roboto+Mono';`<br>
`font-family: 'Roboto Mono', monospace;`
- `@import url（' https://fonts.googleapis.com/css?family=Indie+Flower';`<br>
`font-family: 'Indie Flower', cursive;`
- `@import url（' https://fonts.googleapis.com/css?family=Pacifico');`<br>
`font-family: 'Pacifico', cursive;`
- `@import url（' https://fonts.googleapis.com/css?family=Permanent+Marker';`<br>
`font-family: 'Permanent Marker', cursive;`

## 挑戰2

1.	打開網絡編輯器（單擊下面的“嘗試一下！”按鈕）
2.	添加`id`屬性到一個`header`標籤。例如， `<header id="page-title">`
3.	切換到CSS頁面，寫下 <br>`#page-title`<br>`{`<br>`}`
4.	改標題顏色：例如，`color: yellow;`
5.	在花括號內更改字體：例如，`'Roboto Mono'` 。並添加`@import url（' https://fonts.googleapis.com/css?family=Roboto+Mono'` 於頁面頂部。

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">嘗試一下！</a>