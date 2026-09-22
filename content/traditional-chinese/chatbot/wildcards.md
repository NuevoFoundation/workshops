---
title: "通配符"
draft: false
weight: 8
---

## 通配符
您可能已經注意到，為所有可能的用戶問題撰寫一個對應的類別需要花費很多心力。例如，目前機器人會以 "Hello, world" 來回應 "Hello"。但如果用戶說的是 "Hello there" 或 "Hello chatbot" 呢？我們就需要針對每種情況撰寫一個新的類別。幸運的是，我們有其他工具可以用來讓機器人更加靈活。
<img src="../img/party.png" alt="插圖：一個角色在慶祝新的聊天機器人功能" width="25%" style="display: block; margin-left: 0;" />
其中一個工具就是 **通配符**。通配符是一種特殊的符號，可以匹配任何單詞或短語。我們來看看它是如何運作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

```*``` 符號能夠抓取用戶輸入中的一個或多個單詞。有了這個新類別，聊天機器人現在會對任何以 "Hello" 開頭並接有任意單詞的輸入回應 "Hi!"。因此，模式 "HELLO *" 可以匹配 "HELLO THERE"、"HELLO CHATBOT"、"HELLO WORLD" 和 "HELLO EVERYONE" 等等。