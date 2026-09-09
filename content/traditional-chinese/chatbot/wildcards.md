---
title: "Wildcards"
draft: false
weight: 8
---

## 萬用字元
你可能會注意到，為每一種用戶可能提問的方式撰寫一個分類相當耗費精力。例如，目前機器人會對「Hello」的輸入回應「Hello, world」。但如果用戶輸入「Hello there」或「Hello chatbot」呢？我們將不得不為每種情況都撰寫一個新的分類。幸好，還有其他工具可以讓我們的機器人更加靈活。
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
其中一個工具就是**萬用字元**。萬用字元是一種特殊字符，可以匹配任何單詞或短語。我們來看看它是如何工作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

```*``` 符號可以捕捉用戶輸入中的一個或多個單詞。有了這個新的分類，聊天機器人現在會對任何以「Hello」起始，後面跟著任何單詞的輸入回應「Hi!」。因此，模式「HELLO *」可以匹配「HELLO THERE」、「HELLO CHATBOT」、「HELLO WORLD」、「HELLO EVERYONE」等。