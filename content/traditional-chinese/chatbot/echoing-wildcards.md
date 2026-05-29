---
title: "回應通配符"
draft: false
weight: 9
---

## 介紹 ```<star />``` 標籤
讓我們學習一個新工具，讓我們的聊天機器人能提供更有趣的回應。在上一課中，我們學習了如何使用通配符 ```*``` 來匹配任何字詞或片語。但如果我們想在回應中使用使用者輸入的字詞或片語該怎麼辦？例如，如果使用者告訴我們他們最喜歡的顏色，我們希望機器人的回應中包含使用者最喜歡的顏色。我們可以使用 ```<star />``` 標籤來達成這個目標。

```<star />``` 標籤是一個特殊標籤，允許我們在回應中使用使用者輸入的字詞或片語。來看看它的運作方式。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

讓我們逐步解析這個分類的運作方式。模式 "MY FAVORITE COLOR IS *" 會匹配任何以 "MY FAVORITE COLOR IS" 開頭，後接任意字詞或片語的輸入。因此，該模式可以匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED"、"MY FAVORITE COLOR IS GREEN" 等等。```<star />``` 標籤會抓取使用者輸入的字詞或片語，並在回應中使用它。所以如果使用者輸入 "MY FAVORITE COLOR IS BLUE"，"blue" 是通配符所代表的字詞，因此當聊天機器人回應時，```<star />``` 會被替換為 "blue"。機器人就會回應 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下是這個分類的一些輸入和輸出範例：

輸入 | 回應
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.