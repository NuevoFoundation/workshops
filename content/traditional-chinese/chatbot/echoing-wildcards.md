```markdown
---
title: "Echoing Wildcards"
draft: false
weight: 9
---

## 介紹 ```<star />``` 標籤
讓我們再學習一個工具，使得我們的聊天機器人能產生更有趣的回應。在上一節課中，我們學到了如何使用通配符 ```*``` 來匹配任意單詞或片語。但是，如果我們希望在回應中使用使用者輸入的單詞或片語，該怎麼辦？例如，當使用者告訴我們他們最喜歡的顏色時，我們希望機器人的回應中也包含使用者最喜歡的顏色。我們可以使用 ```<star />``` 標籤來實現這個功能。

```<star />``` 標籤是一個特殊的標籤，允許我們在回應中使用使用者輸入的單詞或片語。讓我們看看它是如何工作的。

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

讓我們來分析這個範例是如何運作的。模式 "MY FAVORITE COLOR IS *" 會匹配任何以 "MY FAVORITE COLOR IS" 開頭並接著任意單詞或片語的輸入。也就是說，該模式可以匹配 "MY FAVORITE COLOR IS BLUE"、"MY FAVORITE COLOR IS RED"、"MY FAVORITE COLOR IS GREEN" 等等。```<star />``` 標籤將捕捉使用者輸入的單詞或片語並在回應中使用。所以如果使用者輸入 "MY FAVORITE COLOR IS BLUE"，那麼通配符所代表的單詞就是 "blue"，因此聊天機器人在回應時，```<star />``` 會被替換成 "blue"。機器人會回應說 "Your favorite color is blue"。

<img src="../img/sentence_response.png" alt="圖示展示聊天機器人如何匹配句子模式並進行回應" width="27%" />

以下是此範例的更多輸入和輸出例子：

輸入 | 輸出 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```