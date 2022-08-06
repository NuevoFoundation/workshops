---
title: "挑战2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

## 用CSS设计网站的样式

HTML标签告诉浏览器要使用哪些网站元素（标题，照片，表格，等）。但是我们还需要告诉它如何显示和摆放这些元素。我们可能希望标题位于中间或网站的右侧; 我们也可能想要放张图片再右侧。我们可以通过两种方式来设计网站的样式：
1. 使用HTML属性
2. 使用阶层式样式表 (CSS)。

### 阶层式样式表（CSS）

虽然HTML属性很容易使用，但它们很快就会变得混乱。如果我们希望做很多样式设计，HTML元素可能会变得很长且难以阅读。此外，如果我们想用相同的方式设置许多元素的样式呢，我们将不得不复制每个元素的所有属性。这样不但效率不高并且容易出错。对于设计大多网站样式，最好使用CSS。

CSS文件与HTML标记紧密配合。每个HTML标签可以具有一个`class` 属性或一个 `id` 有助于标识每个元素的属性。不同的元素可以有相同的类（`class`），一个元素可以有多个不同的类(`class`)。但是，一个元素只能有一个单一的`id`，并且该`id`无法在元素之间共享。 CSS文件会使用这些属性来显示与`class`或`id`相关的网站元素。

以下是一的例子：
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> See the Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Styling it up</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<b>单击左上角的“HTML”选项以查看HTML程式编码 ，然后单击“CSS”选项以查看CSS程式编码 。</b>

让我们看一下HTML代码。找具有属性"info"的标签`<div>`，看起来像`<div id="info">`。通过`<div>`的`id`，我们可以使用CSS来为这个HTML元素指定样式。

切换到CSS文件。在这，我们还可以为特定类型的所有元素赋予样式。例如，我们可以使用CSS为所有`<header>`元素赋予相同的样式。在`<header></header>`中，我们告诉浏览器为所有标题(header)着`#0097A7色`（蓝绿色）。

让我们讨论一下CSS的语法。
-	首先，如果要为所有具有相同标签的元素（例如: `<header>`）设置统一样式，只需输入名称即可（例如: header）
-	如果要使用`class`或`id`设置元素样式，请分别在class或id名称前放置 `.` 或 `#`。
-	然后，对于要更改的每个属性，使用这个格式：`属性名称(attribute-name)：值 (value)` 并且以 `;` 结尾。所有这些样式都应由 `{` 和 `}` 包围。

本教程中无法涵盖所有样式元素。上网查询，如果你不确定如何使用CSS完成所需的样式。

![上网查询CSS的GIF](../media/web-search.gif "上网查询CSS的GIF")

{{% notice tip %}}

尽管CSS可以识别140种颜色名称，例如“green(绿色)”，“red(红色)”和“blue(蓝色)”，但这仍然是有限制性的。例如，如果我们想要深绿色或稍浅的绿色怎么办？为此，我们可以引用十六进制或RGB形式的颜色。检查<a href="https://htmlcolorcodes.com/color-names/" target="_blank">此链接</a>以查看颜色及其对应的十六进制形式。

{{% /notice %}}

### 添加新字体

正如你可能知道的，有多种字体可以使用。这一部分将告诉你如何将不同的字体导入你的网站。

- 让我们从网上导入`Heebo`字体。首先，复制贴上以下文字于CSS文件顶部: `@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- 然后，我们将`body`标签设定适用此字体。由于`body`标签包含所有HTML元素，所有元素都会使用此字体。

![body标签列子](../media/bodytag.PNG "body标签列子")

- 请注意，花括号内的格式为： `名称(name): 值(value)`;
  - `<span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono'); </span>`<br> `font-family: 'Roboto Mono', monospace;`
  - `<span style="color:purple"> @import url('https://fonts.googleapis.com/css?family=Indie+Flower');</span>`<br> `font-family: 'Indie Flower', cursive;`
  - `<span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Pacifico'); </span>`<br> `font-family: 'Pacifico', cursive;`
  - `<span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');</span>`<br> `font-family: 'Permanent Marker', cursive;`

### 挑战2

1.	打开网络编辑器（单击下面的“尝试一下！”按钮）
2.	添加`id`属性到一个`header`标签。例如，`<header id="page-title">`
3.	切换到CSS页面，写下 <br>`#page-title`<br>`{`<br>`}`
4.	改标题颜色：例如，`color: yellow;`
5.	在花括号内更改字体：例如，`Roboto Mono` 。并添加 `@import url('https://fonts.googleapis.com/css?family=Roboto+Mono')` 于页面顶部。

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">尝试一下！</a>