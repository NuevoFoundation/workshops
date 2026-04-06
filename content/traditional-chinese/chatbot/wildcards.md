---
title: "通配符"
draft: false
weight: 8
---

## 通配符
你可能已經注意到，為了涵蓋用戶可能提出問題的每一種方式，需要撰寫許多不同的分類，這實在相當耗時。例如，目前聊天機器人會對「Hello」作出回應「Hello, world」。但如果用戶說的是「Hello there」或「Hello chatbot」呢？這樣我們就必須為每一種情況新增一個分類。值得慶幸的是，我們可以使用一些額外的工具來讓機器人更加靈活。
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
其中一個工具就是**通配符**。通配符是一種特殊字符，可以匹配任何單詞或詞組。我們來看看它是如何運作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

符號 ```*``` 可以捕獲用戶輸入中含有的 1 個或多個單詞。透過新增這個分類，聊天機器人將會對任何以「Hello」開頭，後接任何單詞的輸入，作出「Hi!」的回應。因此，模式「HELLO *」將匹配「HELLO THERE」、「HELLO CHATBOT」、「HELLO WORLD」、「HELLO EVERYONE」等等。