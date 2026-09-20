```markdown
---
title: "程式碼與互動性"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

工作坊是具有互動性的。學生應能運行程式碼、查看結果並進行實驗。本指南涵蓋了如何嵌入程式碼編輯器和互動元素。

## 行內程式碼區塊

對於學生閱讀但不直接運行的程式碼範例，請使用帶有語言提示的標準 Markdown 圍欄程式碼區塊：

````markdown
```python
print("Hello, World!")
```
````

支持的語言包括`python`、`html`、`css`、`javascript`、`csharp`、`java`、`sql`、`bash`及其他許多語言。

## 嵌入式程式碼編輯器

對於讓學生撰寫和運行程式碼的活動，請嵌入互動式編輯器。我們使用以下平台：

### Replit

適用於 Python、JavaScript 和通用程式設計。新活動使用`replit.com`域進行嵌入（舊活動可能會使用`repl.it`，該域名仍會自動轉址）。

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">啟動 Replit</a>
```

或者直接嵌入：

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="程式碼與互動性 - Replit 編輯器" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

注意：舊活動中包含`?lite=true`參數的 Replit 語法 URL。目前這個參數不再啟用，可從新的嵌入中省略。

### Codebunga

請勿新增新的 Trinket 連結或嵌入。現有的 Trinket 繼承整合將暫時保留在存儲庫中，並在完成支援的瀏覽器 IDE 遷移後，被標記為`TODO-IDE-Replace`。

舊範例：

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="程式碼與互動性 - Codebunga 編輯器" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

適用於 C# 程式。

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="程式碼與互動性 - .NET Fiddle 編輯器" frameborder="0"></iframe>
```

### CodePen

適用於 HTML/CSS/JavaScript 網頁項目。在此存儲庫中，CodePen 通常以連結按鈕的形式使用，而不是內嵌嵌入：

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">立即試試看！</a>
```

## 互動式 HTML 元素

對於自定義的互動元素（如測驗、拖放、按鈕），可以在 Markdown 中直接使用原始 HTML（此網站已啟用了 Hugo 的`unsafe`渲染）。或者，使用`rawhtml`短碼：

```
{{</* rawhtml */>}}
<button onclick="alert('正確答案！')">點擊我</button>
{{</* /rawhtml */>}}
```

這允許在課程頁面中任意嵌入 HTML、CSS 和 JavaScript。

## 挑戰結構

一個好的活動遵循以下模式：

1. **解釋** 概念並進行簡要說明
2. **展示** 一個帶有程式碼區塊的範例
3. **挑戰** 學生撰寫自己的程式碼
4. **提示** 使用 notice 短碼：

```
{{% notice tip %}}
記得在調用函數時使用括號！
{{% /notice %}}
```

## 提示

- 總是提供一個**可執行的起點**，以防學生面對空白的編輯器手足無措  
- 提交之前測試所有嵌入連結。  
- 設定嵌入編輯器的`height="600"`作為起始點，並根據需要進行調整  
- 如果內嵌編輯器被阻止，請於 iframe 下方附加一個工作的備用連結，例如："看不到編輯器？在新標籤中開啟。"  
- 保持程式碼範例簡短且重點突出。如果範例超過 20 行，請考慮分步撰寫。  

## 另請參閱

- [格式指南](../formatting) — 視覺短碼（警示、按鈕、通知、展開）
- [標籤與元數據](../tags-and-metadata) — 各類頁面的 Frontmatter 欄位
```