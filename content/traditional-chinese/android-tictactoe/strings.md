```markdown
---
title: "字串"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
任何被引號包圍的內容都稱為字串（String）。這是電腦表示單詞或句子的方式。例如，`"a"`、`"2"`、`"banana!"` 和 `"Hello World"` 是字串，但是 `Hello World` 和 `2` 不是字串，因為它們缺少引號。你可以使用加號 (`+`) 運算符將多個字串合併在一起。例如：

- `"Apple" + "Pineapple"` 會生成字串 `"ApplePineapple"`。
- `"Nuevo" + " " + "Foundation"` 會生成字串 `"Nuevo Foundation"`。

{{% notice tip %}}
## 一起動手

刪除程式碼中的所有 `System.out.println` 行。將程式碼從 `System.out.println("Nuevo" + " " + "Foundation");` 開始。注意，合併字串有多種方法。例如，另一種打印 Nuevo Foundation 的方法是寫成 `System.out.println("Nue" + "vo Fou" + "ndation");`。我們將集思廣益，再想出至少一種方法，在每個 `System.out.println` 語句中使用兩個 `+` 符號來打印字串 `"Nuevo Foundation"`。確認 Nuevo Foundation 被打印了三次。換句話說，當你按下運行鍵後，主控台應該看起來像這樣：

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}
```