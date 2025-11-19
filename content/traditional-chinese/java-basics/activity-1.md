---
title: "Print Statements and Comments"
description: "介紹 Java 中的 println() 方法和註解。"
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 讓程式說話！

讓我們試著編寫一個程式，輸出 `Hello World`，只需輸入程式碼行 `System.out.print("Hello World");`

程式會輸出你在 `System.out.print` 的括號中輸入的任何內容。而每行程式碼以 `;` 結束。

接下來，加入更多語句，透過在括號中輸入數字（例如：`System.out.print(2020)`）或將符號置於兩個單引號 `'` 之間（例如：`System.out.print('@')`）來列印數字或符號。

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">啟動 Replit</a>

{{% notice tip %}}
### 你是否注意到你輸入的所有語句都列印在一行上？

有時我們希望在輸入時換行。
為此，我們需要輸入稍微不同的程式碼 `System.out.println();`

（注意：我們輸入 `println` 而非 `print`，以在列印後進行換行）

回到上方試試看，讓所有語句分別列印在不同的行！
{{% /notice %}}

{{% notice tip %}}
### 如何在一行程式碼中列印多個符號？

我們已學到，列印符號時需將符號置於兩個單引號之間 `'`，但如果想在一行列印多個符號該怎麼辦呢？

我們可以將它們置於兩個雙引號 `"` 之間（例如：`System.out.print("@ , - h A #");`）
{{% /notice %}}

{{% notice tip %}}
### !! 重要 !! 有時無法直接將字符放在 " " 裡

當將字符置於輸出語句的 `" "` 中時，有時很容易讓電腦混淆要列印哪些字符。

例如，我們如何告訴電腦列印 `"`？

如果你輸入 `System.out.print(""");`，你將收到錯誤！因為電腦無法判斷文字在哪裡結束！

取而代之的是，某些字符需要透過在前面添加 `\` 進行<b>轉義</b>。

     System.out.print("\"");  // 這會列印出 "

其他需要在 Java 中轉義的字符包括：`'`、`"` 和 `\`。
{{% /notice %}}

## 列印一隻貓頭鷹

讓我們來認識 Patrick 的第一個朋友，小貓頭鷹 Minerva 🦉！

運用你剛學到的知識，並使用僅僅 4 行程式碼重現下面的這隻貓頭鷹！(藝術來源：asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Hi, I am Minerva. Patrick's friend!  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">啟動 Replit</a>

{{% notice warning %}}
#### 我遇到錯誤了！

     Main.java:4: error: reached end of file while parsing
如果你遇到像上面的錯誤，有可能是因為你忘記將字符如 `"` 和 `\` 進行轉義。

重新查看上方的第三個提示，了解在輸出語