```yaml
---
title: "輸出語句和註解"
description: "介紹 Java 中的 println() 方法和註解。"
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" title="Java print statements and comments video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 讓程式說話吧！

讓我們嘗試編寫一個程式，讓它輸出 `Hello World`，方法是輸入程式碼：`System.out.print("Hello World");`

這段程式會列印出你在 `System.out.print` 的括弧內輸入的內容。而每一行程式碼都以 `;` 結尾。

接著，可以新增更多語句來列印數字，方法是將數字放在括弧內（例如：`System.out.print(2020)`），或是將符號放在兩個單引號之間（例如：`System.out.print('@')`）。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">啟動 Replit</a>

{{% notice tip %}}
### 你注意到所有你輸入的語句都列印在同一行了嗎？

有時候，我們希望在輸出時換行。要做到這點，只需輸入稍微不同的程式碼 `System.out.println();`

（注意：我們輸入 `println` 而不是 `print`，這樣句子會在輸出後自動換行）

回到上方，試試看，讓所有語句分別列印在不同的行！
{{% /notice %}}

{{% notice tip %}}
### 如何在一行程式碼中列印多個符號？

我們已經學到，要列印符號可以將它包裹在兩個單引號 `'` 之中，但如果想在一行列印多個符號該怎麼辦？

我們可以簡單地將它們包裹在兩個雙引號 `"` 之間（例如：`System.out.print("@ , - h A #");`）

{{% /notice %}}

{{% notice tip %}}
### !! 重要 !! 有時無法直接將字元放在 " " 之間

在輸出語句中，將一些文字放在 `"` 之間時，有時候可能會讓程式混淆，無法理解要輸出哪些字元。

例如，我們要如何讓程式輸出 `"` 呢？

如果你直接輸入 `System.out.print(""");`，則會出現錯誤！因為程式無法分辨文字從哪裡開始或結束！

因此，有些字元需要加上 `\` 來進行<b>跳脫</b>，例如：

     System.out.print("\"");  // 這會輸出 "

在 Java 中需要進行跳脫的字元包括：`'`、`"` 和 `\`。
{{% /notice %}}

## 列印貓頭鷹

來見見 🐥 Patrick 的第一個朋友，貓頭鷹 Minerva 🦉！

利用你剛剛學到的知識，用程式碼重新創建以下的貓頭鷹，只需使用 4 行程式碼！ （藝術來源：asciiart.eu/animals/birds-land）

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   嗨，我是 Minerva。Patrick 的朋友！   |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">啟動 Replit</a>

{{% notice warning %}}
#### 我遇到了錯誤！

     Main.java:4: error: reached end of file while parsing
如果你看到類似以上的錯誤，很可能是你忘記在語句中跳脫像 `"` 和 `\` 這樣的字元。

回顧上一個提示部分，了解如何在輸出語句中跳脫字元！
{{% /notice %}}

## 添加註解

在建立 Java 程式時，我們可以使用單行註解 `//` 或多行註解 `/*` 和 `*/` 來添加一些備忘筆記。（注意：前面的活動指示文字也都是以註解的形式書寫的）。

此外，添加註解不會對程式執行產生任何影響。因此，你可以隨意在程式中添加筆記。

     // 示例單行註解
     /* 示例
      * 多行
      * 註解 */
```