---
title: "Wildcards"
draft: false
weight: 8
---

## Wildcards
您現在可能已經注意到，為每一種使用者可能提問的方式創建一個分類非常費時。例如，目前機器人會用「Hello, world」回答「Hello」。但是，如果使用者說的是「Hello there」或者「Hello chatbot」呢？我們就需要為每種情況創建一個新的分類。值得慶幸的是，我們可以使用其他工具來讓機器人更加靈活。  
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />  
這些工具之一就是**萬用字元**。萬用字元是一種特殊的符號，可以匹配任何詞語或片語。讓我們看看它是如何運作的。

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

```*``` 符號可以識別使用者輸入中的一個或多個詞語。透過這個新分類，聊天機器人現在會對任何以「Hello」開頭，並接著任何詞語的輸入回答「Hi!」。因此，模式「HELLO *」會匹配「HELLO THERE」、「HELLO CHATBOT」、「HELLO WORLD」、「HELLO EVERYONE」等等。