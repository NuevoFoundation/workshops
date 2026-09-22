---
title: "字串 (Strings)"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

任何被雙引號括起來的東西都叫作 `字串`（string）。這是電腦表示文字或句子的方式。例如，"a"、"2"、"banana!" 和 "Hello World" 都是字串，但 2 和 Hello World 不是字串，因為缺少了雙引號。你可以使用加號 (`+`) 來將多個字串結合在一起！

{{% notice tip %}}
你結合的字串不一定需要是真正的單字！例如，`"Ap" + "ple"` 會產生字串 `"Apple"`。  
<b>如果有疑問，請隨時尋求幫助！</b>

{{% /notice %}}

例如：

- `"Apple" + "Pineapple"` 會生成字串 `"ApplePineapple"`

- `"Nuevo" + " " + "Foundation"` 會生成 `"Nuevo Foundation"`

#### 挑戰 1

如果你想將你的名字和姓氏結合在一起，該怎麼做呢？

#### 挑戰 2

刪除你程式中所有的 `print` 語句。以這一行程式開始：  
`print("Nuevo" + " " + "Foundation")`

當你執行它時，應該會得到以下輸出：

    Nuevo Foundation

讓我們嘗試用另外兩種方法來使用兩個加號（`+`）符號，在每個 `print` 語句中印出 `"Nuevo Foundation"`。完成後，應該會在你的程式中看到 "Nuevo Foundation" 被印出三次。換句話說，當你執行程式時，控制台應如下所示：

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe title="挑戰 2 - Codebunga" src="https://codebunga.com/embed/fsrc8is8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>