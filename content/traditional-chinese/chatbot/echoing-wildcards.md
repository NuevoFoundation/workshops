---
title: "回應萬用字元"
draft: false
weight: 9
---

## 介紹 ```<star />``` 標籤
讓我們學習另一個工具，使我們的聊天機器人能夠有更多有趣的回應。在上一課中，我們學到了如何使用萬用字元 ```*``` 來匹配任何單字或片語。但如果我們想在回應中使用使用者輸入的單字或片語該怎麼辦？例如，當使用者告訴我們他們最喜歡的顏色時，我們希望機器人的回應也包含使用者最喜歡的顏色。我們可以透過使用 ```<star />``` 標籤來實現。

```<star />``` 標籤是一個特別的標籤，允許我們在回應中使用使用者輸入的單字或片語。讓我們來看看它是如何運作的。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

讓我們逐步了解此類別的運作方式。模式 "MY FAVORITE COLOR IS *" 將匹配任何以 "MY FAVORITE COLOR IS" 開頭，後接任何單字或片語的輸入。因此，該模式會匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED" 和 "MY FAVORITE COLOR IS GREEN" 等。```<star />``` 標籤會捕捉使用者輸入的單字或片語，並在回應中使用它。因此，如果使用者輸入了 "MY FAVORITE COLOR IS BLUE"，"blue" 是由萬用字元所代表的單字，當聊天機器人回應時，```<star />``` 會被替換為 "blue"。機器人將回應 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下是此類別的一些輸入與輸出的更多範例：

輸入 | 輸出 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.