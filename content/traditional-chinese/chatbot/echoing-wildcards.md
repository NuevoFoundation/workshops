```yaml
---
title: "Echoing Wildcards"
draft: false
weight: 9
---

## 介紹 ```<star />``` 標籤
讓我們學習另一個工具，讓我們的聊天機器人生成更有趣的回覆。在上一節中，我們學到了如何使用通配符 ```*``` 來匹配任何字或短語。但如果我們希望在回覆中使用使用者輸入的字或短語該怎麼辦呢？例如，如果使用者告訴我們他們最喜歡的顏色，我們希望機器人的回覆能包含使用者最喜歡的顏色。這可以使用 ```<star />``` 標籤來實現。

```<star />``` 標籤是一個特殊的標籤，允許我們在回覆中使用使用者輸入的字或短語。讓我們看看它如何運作。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

讓我們逐步解釋此類別的功能。模式 "MY FAVORITE COLOR IS *" 將匹配任何以 "MY FAVORITE COLOR IS" 開始且後接任何字或短語的輸入。因此，此模式將匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED"、"MY FAVORITE COLOR IS GREEN" 等。```<star />``` 標籤會捕捉使用者輸入的字或短語並將它用於回覆中。如果使用者輸入 "MY FAVORITE COLOR IS BLUE"，通配符代表的字是 "blue"，因此聊天機器人回覆時，```<star />``` 會被替換為 "blue"。機器人將回覆 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="" width="27%" />

以下提供此類別的一些輸入與輸出的範例：

輸入 | 輸出 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```